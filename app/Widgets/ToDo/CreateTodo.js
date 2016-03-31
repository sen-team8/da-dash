import React, { PropTypes } from 'react';
import { Button, Input, Col } from 'react-bootstrap';

export default class CreateTodo extends React.Component {

  static propTypes = {
    actions: PropTypes.func.isRequired,
  }

  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions('Create', 1, this.state.text);
  }

  render() {
    return (
      <div className="todo" id="add">
        <form onSubmit={this.handleSubmit}>
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
