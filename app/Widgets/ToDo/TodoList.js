import React from 'react';
import TodoItem from './TodoItem';
import RaisedButton from 'material-ui/lib/raised-button';

const styleB = {
  float: 'left',
};

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
    // console.log(this.props.todos);
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
        <RaisedButton type="submit" label="All" style={styleB} onClick={this.handleShowAll} />
        <RaisedButton type="submit" label="Completed" style={styleB} onClick={this.handleShowCompleted} />
      </div>
    );
  }
}
