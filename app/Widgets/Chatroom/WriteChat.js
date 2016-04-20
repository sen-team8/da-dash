import React, { PropTypes } from 'react';
import { Button, Input, Image } from 'react-bootstrap';
import filepicker from 'filepicker-js';
import Icon from '../../helper/Icons.js';

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
    id: PropTypes.string.isRequired,
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
    const ImgDumb = this.props.isDashboard ? (
      null
    )
    :
    (
      <Image
        circle
        responsive
        src={`https://ecampus.daiict.ac.in/webapp/intranet/StudentPhotos/${this.props.id.trim().substring(0, 9)}.jpg`}
        style={{ height: '40px', width: '40px', marginRight: '-5px', marginTop: '10px', clip: 'rect(0px,10px,10px,0px)' }}
      />
    );
    const widthStyle = this.props.isDashboard ? '100%' : '60%';
    const marginLeftStyle = this.props.isDashboard ? '0px' : '10px';
    return (
      <div style={{ width: '100%', display: 'flex',
          justifyContent: 'center',
          padding: '5px',
          borderTop: 'solid #d3d3d3 1px',
           }}
      >
        {ImgDumb}
        <div style= {{ width: widthStyle, marginLeft: marginLeftStyle }}>
          <form onSubmit={this.handleSubmit} style={style.form}>
            <div style={{ flexGrow: '1', padding: '2px', maxWidth: '100%' }}>
              <Input
                className="chat textfield"
                type="text"
                placeholder="Enter message"
                value={this.state.text} onChange={this.handleChange}
                style={{ height: '60px' }}
              />
            </div>
            <div style={{ dislpay: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ marginTop: '-1px' }}>
                <div style={{ flexGrow: '1', padding: '2px 2px 1px 2px', maxWidth: '100%' }}>
                  <Button
                    className="chat raised"
                    bsStyle="default"
                    type="submit"
                    block
                    style={{ width: '50px', height: '30px' }}
                  >
                    <Icon size="1.9em" icon="message" style={{ marginTop: '-5px' }} />
                  </Button>
                </div>
                <div style={{ flexGrow: '1', padding: '1px 2px 2px 2px', maxWidth: '100%' }}>
                  <Button
                    className="chat raised"
                    bsStyle="default"
                    onClick={this.fileupload}
                    block
                    style={{ width: '50px', height: '30px' }}
                  >
                    <Icon size="1.9em" icon="file-upload" style={{ marginTop: '-5px' }} />
                  </Button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
