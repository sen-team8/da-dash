import React, { PropTypes } from 'react';

import TodoItem from './TodoItem';
import RaisedButton from 'material-ui/lib/raised-button';
const styleB = {
  float: 'left',
};

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
        <RaisedButton type="submit" label="All" style={styleB} onClick={this.handleShowAll} />
        <RaisedButton type="submit" label="Completed" style={styleB} onClick={this.handleShowCompleted} />
      </div>
    );
  }
}
