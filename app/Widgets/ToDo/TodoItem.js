import React from 'react';
import { ButtonToolbar, Button, Input } from 'react-bootstrap';

let style;

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
    }
    else {
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
        <div style={style.styleD} onDoubleClick={this.handleDoubleClick}>
          <div style= {style.styleP}>
            <p> {this.state.text} </p>
          </div>
          <ButtonToolbar style={style.styleB}>
            <Button type="submit" bsStyle={this.state.buttonState} onClick={this.handleDeleteTodo}>Del</Button>
            <Button type="submit" bsStyle={this.state.buttonState} onClick={this.handleCompleteTodo}>Done</Button>
          </ButtonToolbar>
        </div>
      );
    } else {
      return (
        <div style={style.styleD} onDoubleClick={this.handleDoubleClick}>
          <div style= {style.styleP}>
              {/* <TextField value= {this.state.text} onChange= {this.handleTextChange} /> */}
              <Input className="todo textfield" type="text" value={this.state.text} onChange={this.handleTextChange}/>
          </div>
          <Button type="submit" style={style.styleC} onClick={this.handleSave}>Save</Button>
        </div>
    );
    }
  }
  render() {
    return (
      <div>
          {this.textArea()}
      </div>
   );
  }
}

style = {
  styleD: {
    width: '100%',
    margin: '0.5em auto',
    borderRadius: '1em',
  },

  styleP: {
    width: '70%',
    padding: '2px',
    backgroundColor: '#fff',
    borderRadius: '1em',
  },

  styleB: {
    position: 'relative',
    top: '-45px',
    float: 'right',
  },

  styleC: {
    position: 'relative',
    top: '-52px',
    float: 'right',
  },
};
