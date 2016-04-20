import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

export default class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool.isRequired,
  }

  render() {
    return (
        <ListGroup className="todo listgroup hide-overflow-x" style={{ height: '300px', borderBottomStyle: 'solid', borderColor: '#d3d3d3', borderWidth: '1px' }}>
        {
          this.props.todos.map((todo) => {
            return (
                <TodoItem
                  key={todo.ID}
                  todo={todo}
                  actions={this.props.actions}
                  showCompleted = {this.props.showCompleted}
                  verifyTodo = {this.verifyTodo}
                />
            );
          })
        }
        </ListGroup>
    );
  }
}
