import React from 'react';
import TodoItem from './TodoItem';
import RaisedButton from 'material-ui/lib/raised-button';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showAll: true,
      showCompleted: false,
    };
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
  }

  handleShowAll() {
    this.setState({
      showAll: true,
      showCompleted: false,
    });
  }

  handleShowCompleted() {
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
                  status = {this.state}
                />
          );
          })
        }
        <RaisedButton type="submit" label="Completed" onClick={this.handleShowCompleted} />
        <RaisedButton type="submit" label="All" onClick={this.handleShowAll} />
      </div>
    );
  }
}
