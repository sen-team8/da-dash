import React, { PropTypes } from 'react';
import { ButtonToolbar, Button, Input, ListGroupItem } from 'react-bootstrap';

let style;

export default class TodoItem extends React.Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    actions: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool.isRequired,
  }

  state = {
    isEditing: false,
    text: this.props.todo.TEXT,
    buttonState: 'default',
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isEditing: false,
      text: nextProps.todo.TEXT,
    });
  }

  handleDeleteTodo = () => {
    this.props.actions('delete', this.props.todo.ID);
  }

  handleDoubleClick = () => {
    this.setState({
      isEditing: true,
      text: this.props.todo.TEXT,
    });
  }

  handleCompleteTodo = () => {
    this.props.actions('complete', this.props.todo.ID);
    if (!this.props.todo.completed) {
      this.state.buttonState='success';
    } else {
      this.state.buttonState='default';
    }
  }

  handleSave = () => {
    this.props.actions('edit', this.props.todo.ID, this.state.text);
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  textArea = () => {
    if (this.state.isEditing === false) {
      if (this.props.showCompleted===true && this.props.todo.completed===false) {
        return null;
      }
      return (
        <div style={style.item}>
          <div onDoubleClick={this.handleDoubleClick}>
            {this.state.text}
          </div>
           <div>
             <ButtonToolbar>
               <Button type="submit" bsStyle={this.state.buttonState} onClick={this.handleDeleteTodo}>Del</Button>
               <Button type="submit" bsStyle={this.state.buttonState} onClick={this.handleCompleteTodo}>Done</Button>
            </ButtonToolbar>
          </div>
        </div>
      );
    } else {
      return (
        <div style={style.edit}>
            <Input
              type="text" value={this.state.text}
              onDoubleClick={this.handleDoubleClick}
              onChange={this.handleTextChange}
            />
          <div>
            <Button type="submit" onClick={this.handleSave}>Save</Button>
            </div>
        </div>
    );
    }
  }
  render() {
    return (
      <ListGroupItem>
          {this.textArea()}
      </ListGroupItem>
   );
  }
}

style = {
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
