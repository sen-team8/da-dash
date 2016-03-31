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
    e.preventDefault();
    this.props.actions('Create', 1, this.state.text);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="What needs to be done?"
            onChange={this.handleChange}
          />
          <RaisedButton type="submit" label="Add" style={style} />
        </form>
    </div>
    );
  }
}
