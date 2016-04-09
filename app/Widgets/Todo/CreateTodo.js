import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';
import Icon from '../../helper/Icons.js';

const style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

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
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} style={style.form}>
          <Input
            className="todo textfield"
            type="text"
            placeholder="Enter text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <div>
            <Button className="todo raised" bsStyle="primary" type="submit">
              <Icon size="1.65em" icon="add" style={{ color: 'white' }}>Add</Icon>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
