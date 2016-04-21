import React, { PropTypes } from 'react';
import ChatItem from './ChatItem';
import { ListGroup } from 'react-bootstrap';

let prevChatId=null;
let isPrevChatId=false;

class ChatList extends React.Component {

  static propTypes = {
    chats: PropTypes.array,
    isDashboard: PropTypes.bool,
    id: PropTypes.string,
  }
  componentDidMount() {
    // const objDiv = document.getElementById('chatList');
    // objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <ListGroup style={{ }}>
      {
        this.props.chats.map((chat, key) => {
          if (prevChatId===chat.id && key!==0) {
            isPrevChatId = true;
          } else {
            isPrevChatId = false;
            prevChatId=chat.id;
          }
          return (
              <ChatItem
                key={key}
                isDashboard= {this.props.isDashboard}
                chat={chat}
                isPrevChatId={isPrevChatId}
                id= {this.props.id}
              />
          );
        })
      }
      </ListGroup>
    );
  }
}

export default ChatList;
