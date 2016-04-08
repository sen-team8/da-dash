import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';

let style;
export default class WriteChat extends React.Component {

  static propTypes = {
    sendChat: PropTypes.func.isRequired,
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
    this.props.sendChat(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <form onSubmit={this.handleSubmit} style={style.form}>
          <Input className="chat textfield" type="text" value={this.state.text} onChange={this.handleChange}/>
          <div>
            <Button className="chat raised" bsStyle="primary" type="submit">Send</Button>
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
