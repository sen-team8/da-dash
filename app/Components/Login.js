<<<<<<< HEAD
import React, { Component } from 'react';
import { FlatButton, TextField } from 'material-ui';
// import image from 'react';
// import imageResolver from 'utils/image-resolver';

export default class Login extends Component {
  // image= require('./hel.png');
  styles() {
    return {
      container: {
        displey: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '620px',
        width: '100%',
      },
      main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '500px',
        marginLeft: '35%',
        marginTop: '5px',
        // border: 'solid 3px #bbbab6',
        backgroundColor: 'white',
      },
      header: {
        textAlign: 'center',
        fontSize: '30px',
        lineHeight: '1',
      },
      headerContainer: {
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
      },
      loginForm: {
        height: '201px',
        // backgroundColor: 'yellow',
        border: 'solid 3px #bbbab6',
        // marginTop: '15px',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
        // paddingLeft: '20%',
        marginTop: '5%',
        textAlign: 'center',
      },
    };
  }
  render() {
    const styles = this.styles();
    return (
      <div style={styles.container}>
        <div style={styles.main}>
          <div style={styles.headerContainer}>
            <h2 style={styles.header} >
              <h1 style= {{ color: '#FB5012', fontFamily: 'Comic Sans MS' }}>Welcome to DA-Dash</h1><br/><br/>
              <div style={ { fontSize: '26px', color: '#FB5012', fontStyle: 'italic' } }>"Your One Stop Destination"</div>
            </h2>
          </div>
          <div style={styles.loginForm}>
            <div>
              <TextField
                hintText="ID"
                ref="userId"
              />
            </div>
            <div>
              <TextField
                ref="password" type="password"
                hintText="Password"
              />
            </div>
            <div>
              <FlatButton
                label="Login"
                style={{ flexGrow: '1' }}
              />
            </div>
          </div>
        </div>
=======
import React from 'react';


const styleContainer= {
  display: 'flex',
  margin: 'auto',
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div style={styleContainer}>
        MyComponent
>>>>>>> 459900a15695b59759c88fa111912151f636d360
      </div>
    );
  }
}
