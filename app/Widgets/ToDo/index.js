import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row } from 'react-bootstrap';
import './todo.css';

import { actions } from '../../redux/actions';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: 'All' };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  showCreateTodo() {
    if (this.state.show === 'All') {
      return (
          <CreateTodo actions={this.props.actions}/>
        );
    }
    return <div></div>;
  }
  handleStateChange(text) {
    this.setState({ show: text });
  }

  render() {
    console.log(this.props);
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
        <TodoList actions={this.props.actions} todos={this.props.todo.todos}
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
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
