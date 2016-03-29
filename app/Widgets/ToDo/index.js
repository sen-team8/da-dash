import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: 'All' };
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
  }

  render() {
    return (
      <div className="centered" id="todoApp">
        <div id="todoHeader">
          <span>Todo App</span>
        </div>
        {this.showCreateTodo()}
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    );
  }
}
