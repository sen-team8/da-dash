import React, { Component, PropTypes } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, Button, Panel } from 'react-bootstrap';

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
    borderBottomStyle: 'solid',
    borderColor: '#d3d3d3',
    borderWidth: '1px',
  },
  pos: {
    position: 'absolute',
    bottom: '30px',
    marginLeft: 'calc(50% - 100px)',
  },
};

class Todo extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
    gettingTodos: PropTypes.bool.isRequired,
    AUTHID: PropTypes.string.isRequired,
  }

  state = {
    show: 'All',
    showAll: true,
    showCompleted: false,
  };

  componentWillMount() {
    this.props.actions.getTodos(this.props.AUTHID);
  }

  componentWillReceiveProps(nextProps) {
    const todos = {
      todos: nextProps.todos,
    };
    if (this.props.gettingTodos=== false) {
      this.props.actions.setTodos(todos, this.props.AUTHID);
    }
  }

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
      <div className="widget-outer">
        <Panel header={'Todo'} >
      <div className="custom-inner">
        <div style={style.head}>
          {this.showCreateTodo()}
        </div>
          <TodoList actions={this.actionHandler} todos={this.props.todos}
            showCompleted={this.state.showCompleted}
          />
        <div style={{ backgroundColor: 'black', width: '100%' }}>
        <ButtonToolbar style={style.pos}>
            <Button type="submit" bsStyle={bsStyle.buttonAll} onClick={this.handleShowAll}>All</Button>
            <Button type="submit" bsStyle={bsStyle.buttonComplete} onClick={this.handleShowCompleted}>Completed</Button>
        </ButtonToolbar>
        </div>
      </div>
      </Panel>
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
  return { ...state.reducer.todo, AUTHID: state.reducer.login.AUTHID };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
