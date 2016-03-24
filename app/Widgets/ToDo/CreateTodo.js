import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 12,
};

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      text: '',
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });

  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.actions.createTodo(this.state.text);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Hint Text"
            onChange={this.handleChange}
          />
          <RaisedButton type="submit" label="Add" style={style} />
        </form>
    </div>
    );
  }
}
