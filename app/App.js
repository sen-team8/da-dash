import React, { Component } from 'react';
import ToDo from './Widgets/ToDo';
import { actions } from './redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  console.log(state);
  return { login: state.login, todo: state.todo };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

class App extends Component {
  foo() {
    return 'good';
  }
  render() {
    console.log(this.props);
    return (
      <div className="commentBox">
          Hello,wosld! I am a CmentBox.
          <ToDo actions={this.props.actions} todos={this.props.todo.todos}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
