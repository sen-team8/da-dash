import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';


export default class ChatItem extends React.Component {

  static propTypes = {
    chat: PropTypes.object.isRequired,
  }


  displayChat = () => {
    return (
      <div style={{ maxWidth: '75%', wordWrap: 'break-word' }}>
        <span className = "ChatSpan"><h5 style={{ fontWeight: 'bold' }}>{this.props.chat.id} :</h5> </span>
        <span className = "ChatSpan">{this.props.chat.message} <br /></span>
        <span className = "ChatSpan"><sub>{this.props.chat.time}</sub></span>
      </div>
    );
  }
  render() {
    return (
      <ListGroupItem>
          {this.displayChat()}
      </ListGroupItem>
   );
  }

}
