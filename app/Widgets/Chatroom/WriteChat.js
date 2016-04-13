import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';

const style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
};

export default class WriteChat extends React.Component {

  static propTypes = {
    sendChat: PropTypes.func.isRequired,
    isDashboard: PropTypes.string.isRequired,
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
    const widthStyle = this.props.isDashboard ? '100%' : '60%';
    const marginLeftStyle = this.props.isDashboard ? '0px' : '50px';
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style= {{ width: widthStyle, marginLeft: marginLeftStyle }}>
          <form onSubmit={this.handleSubmit} style={style.form}>
            <div style={{ flexGrow: '10' }}>
              <Input
                className="chat textfield"
                type="text"
                placeholder="Enter message"
                value={this.state.text} onChange={this.handleChange}
                style= {{ padding: '20px' }}
              />
            </div>
          <div>
            <Button
              className="chat raised"
              bsStyle="default"
              type="submit"
              style={{ flexGrow: '1', padding: '10px' }}
            >
              Send
            </Button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
