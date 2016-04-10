import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';

const buttonStyle = {
  height: '38px',
  width: '90px',
  float: 'right',
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
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        borderBottomStyle: 'solid',
        borderColor: '#d3d3d3',
        borderWidth: '2px',
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="chatroom" style= {{ paddingTop: '5px', fontSize: '24px' }}>Chat Application</Link>
        <ButtonToolbar>
          <Button id="1" style= {buttonStyle} onClick={this.onToggle} active={this.props.batch} >Your Batch</Button>
          <Button id="2" style= {buttonStyle} onClick={this.onToggle} active={!this.props.batch}>Da-iict</Button>
        </ButtonToolbar>
        </div>
        </div>
    );
  }
}
