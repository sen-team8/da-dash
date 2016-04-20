import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';

let buttonPressed ='button-your-batch';
export default class MyComponent extends React.Component {

  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    batch: React.PropTypes.bool.isRequired,
    subject: React.PropTypes.string,
    isDashboard: React.PropTypes.bool,
    isDiscussion: React.PropTypes.bool,
  }

  onToggle = (e) => {
    if (buttonPressed!==e.target.id) {
      buttonPressed = e.target.id;
      this.props.toggle();
    }
  }

  render() {
    const headerHeight= this.props.isDashboard ? '80px' : '105px';
    const chatRoomName= this.props.isDiscussion ? 'Discussion' : 'Chat Room';
    const WidgetNameDumb= this.props.isDashboard ?
    (
      <Link to="chatroom" style= {{ paddingTop: '5px', fontSize: '24px', textAlign: 'center' }}>Chat Room</Link>
    )
    :
    (
      <h1 className="intranet-heading" style= {{ marginTop: '10px' }}>{chatRoomName}</h1>
    );

    const HeadDumb = this.props.subject=== '' ?
    (
      <ButtonToolbar style= {{ display: 'flex', justifyContent: 'center' }}>
        <Button key={0} bsSize="small" onClick={this.onToggle} active={this.props.batch} id="button-your-batch" style={{ flex: '1' }} >
          Your Batch
        </Button>
<<<<<<< HEAD
        <Button key={1} bsSize="small" onClick={this.onToggle} active={!this.props.batch} id="button-daiict" style={{ flex: '1' }}>
=======
        <Button key={1} bsSize="small" onClick={this.onToggle} active={!this.props.batch} id="button-daiict" style={{ flex: '1' }}>
>>>>>>> upstream/master
          DA-IICT
        </Button>
      </ButtonToolbar>
    )
    :
    (
      <p style= {{ display: 'flex', justifyContent: 'center' }}>{this.props.subject}</p>
    );

    return (
      <div style= {{
        height: headerHeight,
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        borderBottomStyle: 'solid',
        borderColor: '#d3d3d3',
        borderWidth: '1px',
      }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {WidgetNameDumb}
          {HeadDumb}
        </div>
      </div>
    );
  }
}
