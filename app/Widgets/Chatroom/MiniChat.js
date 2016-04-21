import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import WriteChat from './WriteChat';
import ChatList from './ChatList';
import { Link } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

class Mini extends Component {


  static propTypes = {
    chats: React.PropTypes.array,
    isDashboard: React.PropTypes.bool,
    sendChat: React.PropTypes.func,
    ID: React.PropTypes.string,
    height: React.PropTypes.number,
  };

  componentDidMount() {
    this.refs.scrollRef.scrollToBottom();
  }

  componentDidUpdate() {
    console.log(this.refs.scrollRef.getScrollTop());
    if (
    this.refs.scrollRef.getScrollHeight()-this.refs.scrollRef.getScrollTop() < this.props.height ||
    this.refs.scrollRef.getScrollTop()<200) {
      this.refs.scrollRef.scrollToBottom();
    }
  }

  render() {
    return (
      <div className="widget-outer">
        <Panel header={<Link to="/chatroom">Batch Chat </Link>} >
          <div className="custom-inner">
            <Scrollbars ref="scrollRef" id="chatList" style={{ height: 400-75 }}>
            <ChatList
              style={{ flex: '8' }}
              chats={this.props.chats}
              isDashboard= {this.props.isDashboard}
              id={this.props.ID}
            />
          </Scrollbars>

            <WriteChat sendChat={this.props.sendChat} isDashboard= {this.props.isDashboard} />
          </div>

        </Panel>
      </div>
    );
  }
}
export default Mini;
