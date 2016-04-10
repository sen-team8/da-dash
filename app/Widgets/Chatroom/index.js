import React, { Component, PropTypes } from 'react';
import WriteChat from './WriteChat';
import Header from './Header';
import ChatList from './ChatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';

const style = {
  todo: {
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    width: '100%',
  },
};

class Chatroom extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    chats: PropTypes.array.isRequired,
    ID: PropTypes.number.isRequired,
    clearChat: PropTypes.func.isRequired,
  }

  state = {
    batch: true,
  }


  componentWillMount() {
    this.props.actions.clearChat();
  }

  componentDidMount() {
    this.props.actions.getUpdatedChat(this.props.ID, 0);
  }

  sendChat = (message) => {
    const c = { id: this.props.ID, message };
    if (this.state.batch) {
      this.props.actions.sendChat(c, 0);
    } else {
      this.props.actions.sendChat(c, 1);
    }
  }
  toggle = () => {
    this.props.actions.clearChat();
    this.state.batch = !this.state.batch;
    if (this.state.batch) {
      this.props.actions.getUpdatedChat(this.props.ID, 0);
    } else {
      this.props.actions.getUpdatedChat(this.props.ID, 1);
    }
  }
  render() {
    return (
        <div style={style.todo} className="bootstrap-border">
          <Header batch={this.state.batch} toggle= {this.toggle} />
          <ChatList chats={this.props.chats} />
          <WriteChat sendChat={this.sendChat} />
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
