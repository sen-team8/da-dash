import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const styleD = {
  width: '100%',
  margin: '0.5em auto',
  borderRadius: '1em',
};

const styleP = {
  width: '70%',
  padding: '2px',
  backgroundColor: '#fff',
  borderRadius: '1em',
};

const styleB = {
  position: 'relative',
  top: '-45px',
  float: 'right',
};

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
        <div style={styleD} onDoubleClick={this.handleDoubleClick}>
          <div style= {styleP}>
            <p> {this.state.text} </p>
          </div>
          <RaisedButton type="submit" label="Del" style={styleB} onClick={this.handleDeleteTodo} />
          <RaisedButton type="submit" label="Done" style={styleB} onClick={this.handleCompleteTodo} />
        </div>
      );
    } else {
      return (
        <div style={styleD} onDoubleClick={this.handleDoubleClick}>
          <div style= {styleP}>
              <TextField value= {this.state.text} onChange= {this.handleTextChange} />
          </div>
          <RaisedButton type="submit" label="Save" style={styleB} onClick={this.handleSave} />
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
