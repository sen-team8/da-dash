import React, { Component } from 'react';
import ToDo from './Widgets/ToDo';
import { actions } from './redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route } from 'react-router';
import Login from './Components/Login';

function mapStateToProps(state) {
  console.log(state);
  return { ...state.reducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="commentBox">
        <Router history={this.props.history}>
            <Route path="/" component={ToDo} actions = {this.props.actions} todos = {this.props.todo.todos} />
            <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
