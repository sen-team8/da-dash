import React from 'react';
import { Button, Input } from 'react-bootstrap';

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
    // console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            {/* <TextField
              hintText="Hint Text"
              onChange={this.handleChange}
            /> */}
            <Input className="todo textfield" type="text" placeholder="Enter text" onChange={this.handleChange}/>
          <Button className="todo raised" id="add" bsStyle="primary" type="submit">Add</Button>
        </form>
    </div>
    );
  }
}
