import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Icon from '../other/Icon';

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
  }


  navbarInstance = (
    <Nav bsStyle="pills" stacked>
       <Nav pullRight style={{ marginTop: '20px', height: '100%', width: 'auto', border: '3px solid black' }}>
        <Icon size="10rem" icon="person" style= {{ color: 'black', marginLeft: '50px', border: '3px solid black', borderRadius: '25px', marginBottom: '25px', marginTop: '20px' }}/>
         <NavItem eventKey={1} href="#" style={{ fontSize: '1.25em', fontFamily: 'Comic Sans MS' }}>
             <Icon size="3rem" icon="account-circle" style= {{ color: 'black', marginRight: '20px' }}/>
                                                 Profile</NavItem>
         <NavItem eventKey={2} href="#" style={{ fontSize: '1.25em', fontFamily: 'Comic Sans MS' }}>
             <Icon size="3rem" icon="now-widgets" style= {{ color: 'black', marginRight: '20px' }}/>
                                                 Choose Widgets</NavItem>
         <NavItem eventKey={3} href="#" style={{ color: 'black', fontSize: '1.25em', fontFamily: 'Comic Sans MS' }}>
             <Icon size="3rem" icon="settings" style= {{ color: 'black', marginRight: '20px' }}/>
                                                 Settings</NavItem>
        <NavItem eventKey={4} href="#" style={{ fontSize: '1.25em', fontFamily: 'Comic Sans MS' }}>
             <Icon size="3rem" icon="help" style= {{ color: 'black', marginRight: '20px' }}/>
                                                 Help</NavItem>
         <NavItem eventKey={5} href="#" style={{ fontSize: '1.25em', fontFamily: 'Comic Sans MS' }}>
             <Icon size="3rem" icon="bug-report" style= {{ color: 'black', marginRight: '20px' }}/>
                                                 Report a Bug</NavItem>
           <NavItem eventKey={6} href="#" style={{ fontSize: '1.25em', fontFamily: 'Comic Sans MS' }}>
             <Icon size="3rem" icon="undo" style= {{ color: 'black', marginRight: '20px' }}/>
                                                 Logout</NavItem>
      </Nav>
    </Nav>
   );

    render() {
      return (
        this.navbarInstance
      );
    }

}
