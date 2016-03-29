import React, { Component } from 'react';
import ToDo from './Widgets/ToDo';
import { Router, Route } from 'react-router';
import Login from './Components/Login';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="commentBox">
        <Router history={this.props.history}>
            <Route path="/" component={ToDo}/>
            <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }

}
