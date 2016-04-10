import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const buttonStyle = {
  height: '45px',
  width: '100px',
  marginLeft: '10px',
};

const style = {
  head: {
    marginBottom: '12px',
    borderBottomStyle: 'solid',
    borderColor: '#d3d3d3',
    borderWidth: '2px',
    fontColor: '#009ACD',
    fontStyle: 'bold',
    marginRight: '180px',
  },
};

let buttonPressed ='1';
export default class MyComponent extends React.Component {

  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    batch: React.PropTypes.bool.isRequired,
  }

  onToggle = (e) => {
    // console.log(e.target.id);
    // console.log(buttonPressed);
    if (buttonPressed!==e.target.id) {
      buttonPressed = e.target.id;
      this.props.toggle();
    }
  }

  render() {
    return (
      <div style= {{
        height: '45px',
        fontSize: '24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'centre',
      }}
      >
        <div>
          <Link to="chatroom" style= { style.head }>Chats</Link>
        </div>
        <Button id="1" bsstyle= {buttonStyle} onClick={this.onToggle} active={this.props.batch}
          style={{ marginBottom: '10px', marginRight: '10px' }}
        >Your Batch</Button>
        <Button id="2" style= {buttonStyle} onClick={this.onToggle} active={!this.props.batch}
          style={{ marginBottom: '10px', marginRight: '10px' }}
        >Da-iict</Button>

    </div>
    );
  }
}
