import React, { Component } from 'react';
import WriteChat from './WriteChat';
import Header from './Header';
import ChatList from './ChatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { actions } from '../../redux/actions';
import { firebaseRef } from '../../network/auth';
import { Scrollbars } from 'react-custom-scrollbars';

const month= ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec'];

const style = {
  todo: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: '0px',
    flexGrow: '1',
    alignItems: 'stretch',
  },
};

export class Chatroom extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    chats: React.PropTypes.array.isRequired,
    ID: React.PropTypes.string.isRequired,
    clearChat: React.PropTypes.func.isRequired,
    receivedChat: React.PropTypes.func.isRequired,
    pathString: React.PropTypes.array,
    params: React.PropTypes.object,
    discussionid: React.PropTypes.string,
    isDashboard: React.PropTypes.bool,
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  state = {
    currentRef: firebaseRef, // .child('Chat'),
    chatGroup: '201301',
    batch: true,
    subject: '',
    height: window.innerHeight,
    isDiscussion: false,
  }

  componentWillMount() {
    this.updateChatGroup();
    this.props.actions.clearChat();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
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
    window.removeEventListener('resize', this.handleResize);
    this.state.currentRef.off();
  }


  handleResize = (e) => {
    this.setState({ height: window.innerHeight });
  }


  updateChatGroup = () => {
    const abc = this.props.pathString || ['default'];
    const foo = _.isEmpty(this.props.params);
    if (!foo && abc!==undefined && (abc.length===3 || abc.length ===2)) {
      const discussion = abc.length===3 ? `${abc[0]}-${abc[1]}-${abc[2]}` : `${abc[0]}-${abc[1]}`;
      this.state.currentRef = firebaseRef.child(discussion);
      this.state.subject = abc[abc.length-1];
      this.state.isDiscussion=true;
      return discussion;
    } else {
      this.state.subject='';
      this.state.isDiscussion=false;
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
          <Header
            batch={this.state.batch}
            subject={this.state.subject}
            toggle= {this.toggle}
            isDashboard={this.props.isDashboard}
            isDiscussion={this.state.isDiscussion}
          />
            <Scrollbars style={{ height: this.state.height -250 }}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={400}
            >
            <ChatList
              style={{ flex: '8' }}
              chats={this.props.chats}
              isDashboard= {this.props.isDashboard}
              id= {this.props.ID}
            />
            </Scrollbars>
          <WriteChat sendChat={this.sendChat} isDashboard= {this.props.isDashboard} />
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
  return { ...state.reducer.chat, ID: state.reducer.login.ID, pathString: state.reducer.intranet.pathString };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
