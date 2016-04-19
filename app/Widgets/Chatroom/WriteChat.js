import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';
import filepicker from 'filepicker-js';

const style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
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
  componentWillMount() {
    filepicker.setKey('ArUvPrMZ7TNexiacXYYtQz');
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit = (e) => {
    console.log('here');
    e.preventDefault();
    this.props.sendChat(this.state.text);
    this.setState({
      text: '',
    });
  }


  fileupload = () => {
    filepicker.pick(
      {
        extension: '.pdf',
        container: 'modal',
        services: ['COMPUTER'],
      },
      (link) => {
        this.props.sendChat(link.url);
        console.log(JSON.stringify(link));
      },
      (FPError) => {
    //  console.log(FPError.toString()); - print errors to console
      }
    );
  }

  render() {
    const widthStyle = this.props.isDashboard ? '100%' : '60%';
    const marginLeftStyle = this.props.isDashboard ? '0px' : '50px';
    return (
      <div style={{ width: '100%', display: 'flex',
          justifyContent: 'center',
          borderTop: 'solid 1px rgb(211, 211, 211)',
          padding: '2px',
           }}
      >
        <div style= {{ width: widthStyle, marginLeft: marginLeftStyle }}>
          <form onSubmit={this.handleSubmit} style={style.form}>
            <div>
              <Button
                className="chat raised"
                bsStyle="default"
                onClick={this.fileupload}
                style={{ flexGrow: '1', padding: '10px' }}
              >
                Upload File
              </Button>
            </div>
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
