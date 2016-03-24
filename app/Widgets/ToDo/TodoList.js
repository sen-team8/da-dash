import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {
          this.props.todos.map(function (todo) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            )
          }.bind(this))
        }
      </div>
    );
  }
}
