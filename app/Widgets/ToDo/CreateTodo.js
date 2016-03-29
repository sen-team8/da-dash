import React from 'react';
import TextField from 'material-ui/lib/text-field';
import { Button, Input } from 'react-bootstrap';

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
          <Button className="raised" bsStyle="primary" type="submit" style={style}>Add</Button>
        </form>
    </div>
    );
  }
}
