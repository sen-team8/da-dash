import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import { actions } from '../../redux/actions';

const style = {
  todo: {
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    width: '100%',
    maxHeight: '340px',
    minHeight: '340px',
  },
  head: {
    fontSize: '24px',
    marginBottom: '12px',
    borderBottomStyle: 'solid',
    borderColor: '#d3d3d3',
    borderWidth: '2px',
    fontColor: '#009ACD',
    fontStyle: 'bold',
  },
  pos: {
    position: 'absolute',
    bottom: '35px',
    marginLeft: '32%',
  },
};

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
    return (
        <CreateTodo actions={this.actionHandler} />
      );
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
      case 'edit': {
        const x = this.props.todos.filter((todoItem) => todoItem.TEXT === text);
        if (x.length === 0) {
          if (text) {
            this.props.actions.editTodo(text, id);
          }
        }
        break;
      }
      case 'Create': {
        const y = this.props.todos.filter((todoItem) => todoItem.TEXT === text);
        if (y.length === 0) {
          if (text) {
            this.props.actions.createTodo(text);
          }
        }
        this.handleShowAll();
        break;
      }
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

  bsStyle = () => {
    return {
      buttonAll: this.state.showCompleted ? 'default' : 'primary',
      buttonComplete: this.state.showCompleted ? 'primary' : 'default',
    };
  }

  render() {
    const bsStyle = this.bsStyle();

    return (
      <div style={style.todo} className="bootstrap-border todo container">
        <Link to={'todo'} style={style.head}>
          To Do List
        </Link>
        <div>
          {this.showCreateTodo()}
        </div>
        <TodoList actions={this.actionHandler} todos={this.props.todos}
          showCompleted={this.state.showCompleted} className="todo list"
        />
      <ButtonToolbar className="todo category" style={style.pos}>
            <Button type="submit" bsStyle={bsStyle.buttonAll} onClick={this.handleShowAll}>All</Button>
            <Button type="submit" bsStyle={bsStyle.buttonComplete} onClick={this.handleShowCompleted}>Completed</Button>
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
