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
import MiniChat from './MiniChat';
import Loading from 'react-loading';
import Panel from 'react-bootstrap';

const month= ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec'];

const style = {
  todo: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: '0px',
    flexGrow: '1',
    alignItems: 'stretch',
    height: '100%',
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
    fav: React.PropTypes.object,
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  state = {
    currentRef: firebaseRef, // .child('Chat'),
    chatGroup: '',
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

  componentDidUpdate() {
    const foo = _.isEmpty(this.refs.scrollRef);
    if (
      !foo && (this.refs.scrollRef.getScrollHeight()-this.refs.scrollRef.getScrollTop() < this.state.height ||
      this.refs.scrollRef.getScrollTop()<100)) {
      this.refs.scrollRef.scrollToBottom();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.state.currentRef.off();
  }


  handleResize = (e) => {
    this.setState({ height: window.innerHeight });
  }


  updateChatGroup = () => {
    const obj = this.props.fav;
    let abc = this.props.pathString || ['default'];
    const foo = _.isEmpty(this.props.params);
    if (!foo && this.props.params.discussionid !== 'discussions') {
      const key = this.props.params.discussionid;
      abc = (obj.get(key).toJS()).path;
    }
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

  showChatroom = () => {
    return this.props.isDashboard ?
    (
      <MiniChat
        chats={this.props.chats}
        isDashboard={this.props.isDashboard}
        sendChat={this.sendChat}
        ID={this.props.ID}
        height={this.state.height}
      />
    )
    :
     (
        <div style={style.todo} className="bootstrap-border">
          <Header
            batch={this.state.batch}
            subject={this.state.subject}
            toggle= {this.toggle}
            isDashboard={this.props.isDashboard}
            isDiscussion={this.state.isDiscussion}
          />
        <Scrollbars ref="scrollRef" id="chatList" style={{ height: this.state.height - 200 }}>
          <ChatList
            style={{ flex: '8' }}
            chats={this.props.chats}
            isDashboard= {this.props.isDashboard}
            id= {this.props.ID}
            updateScroll={this.updateScroll}
          />
          </Scrollbars>
          <WriteChat sendChat={this.sendChat} isDashboard= {this.props.isDashboard} />
        </div>
    );
  }

  render() {
    return this.props.chats ? this.showChatroom():
    <div className="widget-outer intranet-loading">
      <Panel header={<h3>Webmail</h3>}>
        <div className="widget-inner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
          <Loading type="bubbles" color="lightblue" />
        </div>
      </Panel>
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.chat,
    ID: state.reducer.login.ID,
    pathString: state.reducer.intranet.pathString,
    fav: state.reducer.intranet.fav,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
