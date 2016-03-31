import React, { Component } from 'react';
<<<<<<< HEAD
// import ToDo from './Widgets/ToDo';
=======
import ToDo from './Widgets/ToDo';
import { Router, Route } from 'react-router';
>>>>>>> 459900a15695b59759c88fa111912151f636d360
import Login from './Components/Login';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
<<<<<<< HEAD
      <div>
          <Login/>
=======
      <div className="commentBox">
        <Router history={this.props.history}>
            <Route path="/" component={ToDo}/>
            <Route path="/login" component={Login} />
        </Router>
>>>>>>> 459900a15695b59759c88fa111912151f636d360
      </div>
    );
  }

}
