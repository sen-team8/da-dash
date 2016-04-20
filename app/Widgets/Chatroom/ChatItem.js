import React, { PropTypes } from 'react';
import { Image, Panel } from 'react-bootstrap';

export default class ChatItem extends React.Component {

  static propTypes = {
    chat: PropTypes.object.isRequired,
    isDashboard: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  style = () => {
    const widthStyle = this.props.isDashboard ? '100%' : '60%';
    return {
      chat: {
        minHeight: '100px',
        width: widthStyle,
        display: 'flex',
        flexDirection: 'column',
        wordWrap: 'break-word',
        padding: '0px',
        marginTop: '5px',
        marginBottom: '5px',
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
        padding: this.props.isDashboard ? '10px': 0,
      },
    };
  }

  displayChat = () => {
    const who = this.props.id.substring(0, 10) === this.props.chat.id.substring(0, 10);
    const id = this.props.id.substring(0, 10) === this.props.chat.id.substring(0, 10) ? 'You' : this.props.chat.id;
    const style = this.style();
    const header = (
      <div style={style.name}>
        {id} <span style={{ color: '#AAA' }}>posted on {this.props.chat.time}</span>
      </div>
    );
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
      <Image
        circle
        responsive
        src={
          `https://ecampus.daiict.ac.in/webapp/intranet/StudentPhotos/${this.props.chat.id.trim().substring(0, 9)}.jpg`
        }
        style={{
          height: '40px',
          width: '40px',
          marginRight: '12px',
          marginTop: '5px',
          clip: 'rect(0px,10px,10px,0px)',
        }}
      />
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {ImgDumb}
          {this.displayChat()}
      </div>
   );
  }
}
