import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export default class DaDash extends React.Component {
  constructor(props) {
    super(props);
    // this.styles = this.styles();
  }

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
     <Navbar style= {{ backgroundColor: '#FB5012', marginBottom: '0' }}>
       <Navbar.Header>
         <Navbar.Brand>
           <a style={{ color: 'white', fontSize: '34px', fontFamily: 'Comic Sans MS', fontWeight: '10' }}>DA-Dash</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Navbar.Text pullRight style= {{ color: 'white' }}><Button>SidePanel</Button>
       </Navbar.Text>
     </Navbar>
   );

    render() {
      return (
        this.navbarInstance
      );
    }

}
