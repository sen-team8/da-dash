import React, { PropTypes } from 'react';
import ChatItem from './ChatItem';
import { ListGroup } from 'react-bootstrap';

const ChatList = ({ chats }) => {
  return (
    <ListGroup style={{ overflowY: 'scroll', minHeight: '400px', maxHeight: '300px', width: '100%' }}>
    {
      chats.map((chat) => {
        return (
            <ChatItem
              chat={chat}
            />
        );
      })
    }
    </ListGroup>
  );
};

ChatList.propTypes = {
  chats: PropTypes.array,
};

export default ChatList;
