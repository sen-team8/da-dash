import React from 'react';
import { Button } from 'react-bootstrap';

const buttonStyle = {
  height: '45px',
  width: '100px',
  marginLeft: '10px',
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
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'centre',
      }}
      >
        <div>
          <p style= {{ paddingTop: '5px' }}>Chat Application</p>
        </div>
        <Button id="1" style= {buttonStyle} onClick={this.onToggle} active={this.props.batch} >Your Batch</Button>
        <Button id="2" style= {buttonStyle} onClick={this.onToggle} active={!this.props.batch}>Da-iict</Button>

    </div>
    );
  }
}
