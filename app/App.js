import React, { Component } from 'react';
import ToDo from './Widgets/ToDo';
import { actions } from './redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

class App extends Component {
  foo() {
    return 'good';
  }
  render() {
    return (
      <div className="commentBox">
          Hello,wosld! I am a CommentBox.
          <ToDo actions={this.props.actions} todos={this.props.todos}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
