import React, { Component, PropTypes } from 'react';
import WriteChat from './WriteChat';
import ChatList from './ChatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';

let style;


class Chatroom extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    chats: PropTypes.array.isRequired,
    ID: PropTypes.number.isRequired,
  }

  componentDidMount() {
    // this.props.actions.getChat();
    this.props.actions.getUpdatedChat(this.props.ID, 0);
  }

  sendChat = (message) => {
    const c = { id: this.props.ID, message };
    this.props.actions.sendChat(c, 0);
  }
  render() {
    return (
      <div style={style.todo} className="bootstrap-border">
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
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },
};
