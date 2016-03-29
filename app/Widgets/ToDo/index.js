import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Link } from 'react-router';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.route.todos);
    return (
      <div className="centered" id="todoApp">
        <Link to="login"> This link </Link>
        <div id="todoHeader">
          <span>Todo App</span>
        </div>
        <CreateTodo actions={this.props.route.actions} />
        <TodoList actions={this.props.route.actions} todos={this.props.route.todos} />
      </div>
    );
  }
}
