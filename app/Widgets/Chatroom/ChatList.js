import React, { PropTypes } from 'react';
import ChatItem from './ChatItem';
import { ListGroup } from 'react-bootstrap';

const ChatList = ({ chats, isDashboard, id }) => {
  return (
    <ListGroup style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    {
      chats.map((chat) => {
        return (
            <ChatItem
              isDashboard= {isDashboard}
              chat={chat}
              id= {id}
            />
        );
      })
    }
    </ListGroup>
  );
};

ChatList.propTypes = {
  chats: PropTypes.array,
  isDashboard: PropTypes.bool,
  id: PropTypes.string,
};

export default ChatList;
