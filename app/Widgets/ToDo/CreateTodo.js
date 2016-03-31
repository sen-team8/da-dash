import React from 'react';
import { Button, Input, Col } from 'react-bootstrap';

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
      <div className="todo" id="add">
        <form onSubmit={this.handleSubmit}>
            {/* <TextField
              hintText="Hint Text"
              onChange={this.handleChange}
            /> */}
            <Col xs={12} md={8}>
              <Input className="todo textfield" type="text" placeholder="Enter text" onChange={this.handleChange}/>
            </Col>
            <Col xs={6} md={4}>
              <Button className="todo raised" bsStyle="primary" type="submit">Add</Button>
          </Col>
        </form>
    </div>
    );
  }
}
