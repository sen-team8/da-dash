import React, { PropTypes } from 'react';
import ChatItem from './ChatItem';
import { ListGroup } from 'react-bootstrap';

class ChatList extends React.Component {

  static propTypes = {
    chats: PropTypes.array,
    isDashboard: PropTypes.bool,
    id: PropTypes.string,
  }

  componentDidMount() {
    const objDiv = document.getElementById('chatList');
    objDiv.scrollTop = objDiv.scrollHeight-250;
  }

  render() {
    return (
      <ListGroup style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {
        this.props.chats.map((chat) => {
          return (
              <ChatItem
                isDashboard= {this.props.isDashboard}
                chat={chat}
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
