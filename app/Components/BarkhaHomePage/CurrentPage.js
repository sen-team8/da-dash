import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

export default class CurrentPage extends React.Component {
  constructor(props) {
    super(props);
    // this.styles = this.styles();
  }

  // styles() {
  //   return {
  //     main1: {
  //       height: '25px',
  //       width: '100%',
  //       backgroundColor: '#FB5012',
  //       position: 'fixed',
  //       top: '26px',
  //       left: '0',
  //       right: '0',
  //     },
  //     header1: {
  //       fontSize: '14px',
  //       fontWeight: '3',
  //       marginLeft: '10%',
  //       fontFamily: 'Comic Sans MS',
  //       color: 'white',
  //       marginTop: '2px',
  //     },
  //   };
  // }

  navbarInstance = (
     <Navbar style= {{ backgroundColor: '#FB5012', top: '0px' }}>
       <Navbar.Header>
         <Navbar.Brand>
           <a style={{ color: 'white', fontSize: '34px', fontFamily: 'Comic Sans MS', fontWeight: '10' }}>Home</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav pullRight>
         <NavItem eventKey={1} href="#">Search</NavItem>
         <NavItem eventKey={2} href="#">Settings</NavItem>
         <NavItem eventKey={3} href="#">Tools</NavItem>
         <NavItem eventKey={4} href="#">Help</NavItem>
       </Nav>
     </Navbar>
   );


  render () {
    return (
          // <div style={this.styles.main1}>
          //   <h3 style={this.styles.header1}>Home</h3>
          // </div>
          this.navbarInstance
        );
  }
}
