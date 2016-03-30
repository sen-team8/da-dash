import React from 'react';
import { ButtonToolbar, Button, Input, Col } from 'react-bootstrap';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodo= this.handleDeleteTodo.bind(this);
    this.handleDoubleClick= this.handleDoubleClick.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
    this.textArea = this.textArea.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state= {
      isEditing: false,
      text: this.props.todo.TEXT,
      buttonState: "default",
    };
  }

  handleDeleteTodo() {
    console.log(this.props.todo.ID);
    this.props.actions.deleteTodo(this.props.todo.ID);
  }

  handleDoubleClick() {
    this.setState({
      isEditing: true,
      text: this.props.todo.TEXT,
    });
  }

  handleCompleteTodo() {
    this.props.actions.completeTodo(this.props.todo.ID);
    if (!this.props.todo.completed) {
      this.state.buttonState="success";
    } else {
      this.state.buttonState="default";
    }
  }

  handleSave() {
    this.setState({
      isEditing: false,
    });
    this.props.actions.editTodo(this.state.text, this.props.todo.ID);
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  textArea() {
    if (this.state.isEditing === false) {
      if (this.props.status.showCompleted===true && this.props.todo.completed===false) {
        return <div></div>;
      }
      return (
        <div className="todo todoItem">
          <Col xs={9} md={6} onDoubleClick={this.handleDoubleClick}>
            <p className="todo text"> {this.state.text} </p>
          </Col>
          <Col xs={9} md={6}>
            <ButtonToolbar className="todo buttons">
              <Button type="submit" bsStyle={this.state.buttonState} onClick={this.handleDeleteTodo}>Del</Button>
              <Button type="submit" bsStyle={this.state.buttonState} onClick={this.handleCompleteTodo}>Done</Button>
            </ButtonToolbar>
          </Col>
        </div>
      );
    } else {
      return (
        <div className="todo todoItem">
          <Col xs={12} md={8}>
            <Input
              type="text" value={this.state.text}
              onDoubleClick={this.handleDoubleClick}
              onChange={this.handleTextChange}
            />
          </Col>
          <Col xs={6} md={4}>
            <Button type="submit" onClick={this.handleSave}>Save</Button>
          </Col>
        </div>
    );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
          {this.textArea()}
      </div>
   );
  }
}
