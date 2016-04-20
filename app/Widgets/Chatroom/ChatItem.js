import React, { PropTypes } from 'react';

export default class ChatItem extends React.Component {

  static propTypes = {
    chat: PropTypes.object.isRequired,
    isDashboard: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  style = () => {
    const widthStyle = this.props.isDashboard ? '100%' : '60%';
    const borderBottomStyle = this.props.isDashboard ? '0px' : '5px';
    return {
      chat: {
        minHeight: '100px',
        width: widthStyle,
        display: 'flex',
        flexDirection: 'column',
        wordWrap: 'break-word',
        border: '1px solid #d3d3d3',
        borderBottomLeftRadius: borderBottomStyle,
        borderBottomRightRadius: borderBottomStyle,
        padding: '0px',
      },
      name: {
        width: '100%',
        borderBottom: '1px solid #d3d3d3',
        padding: '10px',
        backgroundColor: '#F2F8FA',
        margin: 'auto',
        lineHeight: '80%',
      },
      message: {
        width: '100%',
        minHeight: '40px',
        padding: '10px',
      },
    };
  }

  displayChat = () => {
    const id = this.props.id.substring(0, 10)===this.props.chat.id.substring(0, 10) ? 'You' : this.props.chat.id;
    return (
      <div style={this.style().chat}>
        <div style={this.style().name}>
          <p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{id}</p> <p style={{ color: '#AAAAAA', fontSize: '0.8em' }}>
            posted on {this.props.chat.time}
          </p>
        </div>
        <div style={this.style().message}>{
            this.props.chat.message.substring(0, 8) === 'https://' ? (
                <a href={this.props.chat.message}>{this.props.chat.message}</a>
            )
            :
            (<span>
              {this.props.chat.message}
            </span>
            )
          } <br /></div>
      </div>
    );
  }
  render() {
    const ImgDumb = this.props.isDashboard ? (
      null
    )
    :
    (
      <img
        src="https://image.freepik.com/free-icon/male-user-shadow_318-34042.png"
        style={{ height: '30px', width: '30px', marginRight: '20' }}
      >
      </img>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {ImgDumb}
          {this.displayChat()}
      </div>
   );
  }
}
