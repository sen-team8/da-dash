import React, { PropTypes } from 'react';
import ChatItem from './ChatItem';
import { ListGroup } from 'react-bootstrap';
export default class ChatList extends React.Component {

  static propTypes = {
    chats: PropTypes.array.isRequired,
  }

  render() {
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
}
