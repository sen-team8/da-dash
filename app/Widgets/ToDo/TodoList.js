import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { ButtonToolbar, Button, Col } from 'react-bootstrap';

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
      <div>
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
        <Col xs={4} sm={4} md={4} mdOffset={4} smOffset={4} xsOffset={4}>
          <ButtonToolbar className="todo list">
            <Button type="submit" bsStyle="primary" onClick={this.handleShowAll}>All</Button>
            <Button type="submit" bsStyle="primary" onClick={this.handleShowCompleted}>Completed</Button>
          </ButtonToolbar>
        </Col>
      </div>
    );
  }
}
