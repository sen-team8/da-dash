import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './todo.css';

import { actions } from '../../redux/actions';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: 'All' };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  showCreateTodo() {
    if (this.state.show === 'All') {
      return (
          <CreateTodo actions={this.props.actions}/>
        );
    }
    return <div></div>;
  }
  handleStateChange(text) {
    this.setState({ show: text });
  }

  render() {
    console.log(this.props);
    return (
      <div className="centered todo container" id="todoApp">
        <Link to="login"> This link </Link>
        <div id="todoHeader">
          <span>Todo App</span>
        </div>
        {this.showCreateTodo()}
        <TodoList actions={this.props.actions} todos={this.props.todo.todos}
          handleStateChange={this.handleStateChange}
        />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
