import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row } from 'react-bootstrap';
import './todo.css';

import { actions } from '../../redux/actions';

class Todo extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
  }

  state = {
    show: 'All',
  };

  showCreateTodo = () => {
    if (this.state.show === 'All') {
      return (
          <CreateTodo actions={this.actionHandler}/>
        );
    }
    return <div></div>;
  }

  handleStateChange = (text) => {
    this.setState({ show: text });
  }

  actionHandler = (action, id, text) => {
    switch (action) {
      case 'complete':
        this.props.actions.completeTodo(id);
        break;
      case 'delete':
        this.props.actions.deleteTodo(id);
        break;
      case 'edit':
        const x = this.props.todos.filter((todoItem) => todoItem.TEXT === text);
        if (x.length === 0) {
          if (text) {
            this.props.actions.editTodo(text, id);
          }
        }
        break;
      case 'Create':
        const y = this.props.todos.filter((todoItem) => todoItem.TEXT === text);
        if (y.length === 0) {
          if (text) {
            this.props.actions.createTodo(text);
          }
        }
        break;
      default :
        break;
    }
  }

  render() {
    return (
      <Grid className="centered todo container" id="todoApp">
        <Row className="show-grid">
          <Link to="login"> This link </Link>
          <div className="todo" id="todoHeader">
            <span>Todo App</span>
          </div>
        </Row>
        <Row className="show-grid">
        {this.showCreateTodo()}
      </Row>
      <Row className="show-grid">
        <TodoList actions={this.actionHandler} todos={this.props.todos}
          handleStateChange={this.handleStateChange}
        />
      </Row>
    </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.todo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
