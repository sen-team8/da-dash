import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="centered" id="todoApp">
        <div id="todoHeader">
          <span>Todo App</span>
        </div>
        <CreateTodo actions={this.props.actions}/>
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    );
  }
}
