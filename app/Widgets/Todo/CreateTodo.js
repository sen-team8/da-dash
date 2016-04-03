import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';

let style;
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
      <div >
        <form onSubmit={this.handleSubmit} style={style.form}>
          <Input className="todo textfield" type="text" placeholder="Enter text" onChange={this.handleChange}/>
          <div>
            <Button className="todo raised" bsStyle="primary" type="submit">Add</Button>
          </div>
        </form>
      </div>
    );
  }
}
style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
