import React from 'react';
import ChatItem from './ChatItem';
import { ListGroup } from 'react-bootstrap';

export default function ChatList() {
  // static propTypes = {
  //   chats: PropTypes.array.isRequired,
  // };
  return (
    <ListGroup style={{ overflowY: 'scroll', minHeight: '400px', maxHeight: '300px', width: '100%' }}>
    {
      this.props.chats.map((chat) => {
        return (
            <ChatItem
              chat={chat}
            />
        );
      })
    }
    </ListGroup>
  );
}
