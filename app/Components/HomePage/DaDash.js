import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Icon from '../other/Icon';

export default class DaDash extends React.Component {

  // styles() {
  //   return {
  //     main: {
  //       height: '25px',
  //       width: '100%',
  //       backgroundColor: '#FB5012',
  //       position: 'fixed',
  //       top: '0',
  //       left: '0',
  //       right: '0',
  //       borderBottomRightRadius: '5px',
  //       borderBottomLeftRadius: '5px',
  //     },
  //     header: {
  //       fontSize: '16px',
  //       fontWeight: '3',
  //       fontFamily: 'Comic Sans MS',
  //       marginLeft: '10%',
  //       color: 'white',
  //       marginTop: '1px',
  //     },
  //   };
  // }


  navbarInstance = (
    <div>
     <Navbar style= {{ backgroundColor: '#FB5012', marginBottom: '0' }}>
       <Navbar.Header>
         <Navbar.Brand>
           <a style={{ color: 'white', fontSize: '2.125em', fontFamily: 'Comic Sans MS', fontWeight: '10', marginLeft: '33px' }}>DA-Dash</a>
         </Navbar.Brand>
       </Navbar.Header>
         <Nav pullRight>
                 <NavItem eventKey={1} href="menu"><Icon size="3rem" icon="menu" style= {{ color: 'white' }}/></NavItem>
         </Nav>
     </Navbar>
     </div>
   );

    render() {
      return (
       this.navbarInstance
      );
    }

}
