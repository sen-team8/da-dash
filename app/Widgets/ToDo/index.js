import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.actions);
    return (
      <div className="centered" id="todoApp">
        <div id="todoHeader">
          <span>Todo App</span>
        </div>
        <CreateTodo actions={this.props.actions}/>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}
