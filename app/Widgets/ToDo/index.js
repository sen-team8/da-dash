import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: 'All' };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.actionHandler = this.actionHandler.bind(this);
  }

  showCreateTodo() {
    if (this.state.show === 'All') {
      return (
          <CreateTodo actions={this.actionHandler}/>
        );
    }
    return <div></div>;
  }
  handleStateChange(text) {
    this.setState({ show: text });
  }


  actionHandler(action, id, text) {
    switch (action) {
      case 'complete':
        this.props.actions.completeTodo(id);
        break;
      case 'delete':
        this.props.actions.deleteTodo(id);
        break;
      case 'edit':
        const x = this.props.todo.todos.filter((todoItem) => todoItem.TEXT === text);
        if (x.length === 0) {
          if (text) {
            this.props.actions.editTodo(text, id);
          }
        } else {
          console.log('Same TODO!');
        }
        break;
      case 'Create':
        const y = this.props.todo.todos.filter((todoItem) => todoItem.TEXT === text);
        if (y.length === 0) {
          if (text) {
            this.props.actions.createTodo(text);
          }
        } else {
          console.log('Same TODO!');
        }
        break;
      default :
        break;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="centered" id="todoApp">
        <Link to="login"> This link </Link>
        <div id="todoHeader">
          <span>Todo App</span>
        </div>
        {this.showCreateTodo()}
        <TodoList actions={this.actionHandler} todos={this.props.todo.todos}
          handleStateChange={this.handleStateChange}
        />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
