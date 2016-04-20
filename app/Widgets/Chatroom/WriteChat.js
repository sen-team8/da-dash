import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';
import filepicker from 'filepicker-js';

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
    isDashboard: PropTypes.bool.isRequired,
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
          padding: '5px',
          marginTop: '0px',
          borderBottom: 'solid #d3d3d3 1px',
           }}
      >
        <div style= {{ width: widthStyle, marginLeft: marginLeftStyle }}>
          <form onSubmit={this.handleSubmit} style={style.form}>
            <div style={{ flexGrow: '1', padding: '2px', maxWidth: '40%' }}>
              <Button
                className="chat raised"
                bsStyle="default"
                onClick={this.fileupload}
              >
                Upload File
              </Button>
            </div>
              <div style={{ flexGrow: '1', padding: '2px', maxWidth: '100%' }}>
                <Input
                  className="chat textfield"
                  type="text"
                  placeholder="Enter message"
                  value={this.state.text} onChange={this.handleChange}
                />
              </div>
            <div style={{ flexGrow: '1', padding: '2px', maxWidth: '30%' }}>
              <Button
                className="chat raised"
                bsStyle="default"
                type="submit"
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
