import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

export default class TodoList extends React.Component {
  static propTypes = {
    handleStateChange: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired,
  }

  state = {
    showAll: true,
    showCompleted: false,
  }

  handleShowAll = () => {
    this.props.handleStateChange('All');
    this.setState({
      showAll: true,
      showCompleted: false,
    });
  }

  handleShowCompleted = () => {
    this.props.handleStateChange('Completed');
    this.setState({
      showAll: false,
      showCompleted: true,
    });
  }

  render() {
    return (
        <ListGroup style={{ overflowY: 'scroll', maxHeight: '300px' }}>
        {
          this.props.todos.map((todo) => {
            return (
                <TodoItem
                  key={todo.ID}
                  todo={todo}
                  actions={this.props.actions}
                  showCompleted = {this.state.showCompleted}
                  verifyTodo = {this.verifyTodo}
                />
          );
          })
        }
        </ListGroup>
    );
  }
}
