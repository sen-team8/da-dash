import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import { actions } from '../../redux/actions';

let style;

class Todo extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
  }

  state = {
    show: 'All',
    showAll: true,
    showCompleted: false,
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

  handleShowAll = () => {
    this.handleStateChange('All');
    this.setState({
      show: 'All',
      showAll: true,
      showCompleted: false,
    });
  }

  handleShowCompleted = () => {
    this.handleStateChange('Completed');
    this.setState({
      show: 'Completed',
      showAll: false,
      showCompleted: true,
    });
  }

  render() {
    return (
      <div style={style.todo} className="bootstrap-border">
        <Link to={'todo'} >
          Todo
        </Link>
        <div>
          {this.showCreateTodo()}
        </div>
        <TodoList actions={this.actionHandler} todos={this.props.todos}
          showCompleted={this.state.showCompleted}
        />
        <ButtonToolbar>
            <Button type="submit" bsStyle="primary" onClick={this.handleShowAll}>All</Button>
            <Button type="submit" bsStyle="primary" onClick={this.handleShowCompleted}>Completed</Button>
        </ButtonToolbar>
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
  return { ...state.reducer.todo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

style = {
  todo: {
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },
};
