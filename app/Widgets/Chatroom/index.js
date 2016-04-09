import React, { Component, PropTypes } from 'react';
import WriteChat from './WriteChat';
import Header from './Header';
import ChatList from './ChatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';
import { firebaseRef } from '../../network/auth';

let style;
const month= ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec'];

class Chatroom extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    chats: React.PropTypes.array.isRequired,
    ID: React.PropTypes.string.isRequired,
    clearChat: React.PropTypes.func.isRequired,
    receivedChat: React.PropTypes.func.isRequired,
    pathString: React.PropTypes.array,
    params: React.PropTypes.object,
  }

  state = {
    currentRef: firebaseRef, // .child('Chat'),
    chatGroup: '201301',
    batch: true,
  }


  componentWillMount() {
    this.updateChatGroup();
    this.props.actions.clearChat();
  }

  componentDidMount() {
    this.state.currentRef.on('value', (snapshot) => {
      const chatArray = [];
      const chat = snapshot.val();
      for (const key in chat) {
        if (!chat.hasOwnProperty(key)) continue;

        chatArray.push(chat[key]);
      }
      this.props.actions.receivedChat(chatArray);
    });
  }

  componentWillUnmount() {
    this.state.currentRef.off();
  }

  updateChatGroup = () => {
    const abc = this.props.pathString || ['default'];
    if (abc!==undefined && abc.length===3) {
      const discussion = `${abc[0]-abc[1]-abc[2]}`;
      this.state.currentRef = firebaseRef.child(discussion);
      return discussion;
    } else {
      let str;
      if (this.state.batch) {
        str = this.props.ID.substring(0, 6);
      } else {
        str = 'DAIICT';
      }
      this.state.currentRef = firebaseRef.child(str);
      return str;
    }
  }

  sendChat = (message) => {
    const d = new Date();
    const group = this.updateChatGroup();
    const c = { id: this.props.ID, message };
    c.time = `${month[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    this.props.actions.sendChat(c, group);
  }

  toggle = () => {
    this.props.actions.clearChat();
    this.state.currentRef.off();
    this.state.batch = !this.state.batch;
    this.updateChatGroup();

    this.state.currentRef.on('value', (snapshot) => {
      const chatArray = [];
      const chat = snapshot.val();
      for (const key in chat) {
        if (!chat.hasOwnProperty(key)) continue;

        chatArray.push(chat[key]);
      }
      this.props.actions.receivedChat(chatArray);
    });
  }

  render() {
    return (
        <div style={style.todo} className="bootstrap-border">
          <Header batch={this.state.batch} toggle= {this.toggle}/>
          <ChatList chats={this.props.chats}/>
          <WriteChat sendChat={this.sendChat}/>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.chat, ID: state.reducer.login.ID };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);

style = {
  todo: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '25%',
    WebkitTransform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '10px',
    paddingTop: '0px',
    flexGrow: '1',
  },
};
