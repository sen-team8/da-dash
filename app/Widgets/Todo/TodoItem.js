import React, { PropTypes } from 'react';
import { ButtonToolbar, Button, Input, ListGroupItem } from 'react-bootstrap';
import Icon from '../../helper/Icons.js';

const style = {
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
  buttons: {
    border: 'none',
  },
};

export default class TodoItem extends React.Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    actions: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool.isRequired,
  }

  state = {
    isEditing: false,
    text: this.props.todo.TEXT,
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
  }

  handleSave = (e) => {
    e.preventDefault();
    if (this.state.text===this.props.todo.TEXT) {
      this.setState({
        isEditing: false,
      });
    }
    this.props.actions('edit', this.props.todo.ID, this.state.text);
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  textArea = () => {
    const bsStyle = this.bsStyle();
    if (this.state.isEditing === false) {
      if (this.props.showCompleted===true && this.props.todo.completed===false) {
        return null;
      }
      return (
        <div style={style.item}>
          <div onDoubleClick={this.handleDoubleClick} style={{ maxWidth: '60%', wordWrap: 'break-word' }}>
            {this.state.text}
          </div>
           <div>
             <ButtonToolbar style={{ display: 'flex', width: 'auto' }}>
               <Button type="submit" bsStyle={bsStyle.button} onClick={this.handleDeleteTodo} style={style.buttons}>
                 <Icon size="1.5em" icon="delete" /></Button>
               <Button type="submit" bsStyle={bsStyle.button} onClick={this.handleCompleteTodo} style={style.buttons}>
                 <Icon size="1.5em" icon="done" /></Button>
            </ButtonToolbar>
          </div>
        </div>
      );
    } else {
      if (this.props.showCompleted===true && this.props.todo.completed===false) {
        return null;
      }
      return (
        <form style={style.edit} onSubmit={this.handleSave}>
            <Input
              type="text" value={this.state.text}
              onDoubleClick={this.handleDoubleClick}
              onChange={this.handleTextChange}
            />
          <div>
            <Button type="submit" >Save</Button>
            </div>
        </form>
    );
    }
  }

  bsStyle = () => {
    return {
      button: this.props.todo.completed ? 'success' : 'default',
    };
  }

  render() {
    if (this.textArea()) {
      return (
        <ListGroupItem>
            {this.textArea()}
        </ListGroupItem>
     );
    } else {
      return null;
    }
  }
}
