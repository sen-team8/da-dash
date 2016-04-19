import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Input, Image } from 'react-bootstrap';
import { actions } from '../redux/actions';


class Profile extends Component {


  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    ID: React.PropTypes.string.isRequired,
    profile: React.PropTypes.object.isRequired,
    AUTHID: React.PropTypes.string.isRequired,
  }

  state = {
    text: '',
    isEditName: false,
    didMount: false,
  }

  componentWillMount() {
    const id= this.props.ID;
    this.props.actions.setProfileId(id);
    this.props.actions.getProfileName(this.props.ID, this.props.AUTHID);
  }

  componentDidMount() {
    this.state.didMount = true;
  }


  onTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleDoubleClick = () => {
    // console.log('double clickkkkkkkkkkkkkkkk');
    this.setState({
      isEditName: true,
      text: this.props.profile.name,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id= this.props.ID;
    // console.log('ID ' + id + 'Name ' + this.state.text);
    this.props.actions.setProfileName(id, this.state.text, this.props.AUTHID);
    this.state.isEditName= false;
    this.setState({
      text: '',
    });
  }

  img = () => {
    return (
      <Image
        circle
        responsive
        src={`https://ecampus.daiict.ac.in/webapp/intranet/StudentPhotos/${this.props.ID}.jpg`}
        style={{ width: '200px', height: '200px' }}
      />
    );
  };

  render() {
    const nameComp = (this.props.profile.name === null || this.state.isEditName === true) ? (
      <form onSubmit={this.handleSubmit} style={{ width: '400px' }}>
          <Input
            label="Name: "
            className="chat textfield"
            type="text"
            bsSize="large"
            placeholder= "Enter Name"
            value= {this.state.text}
            onChange={this.onTextChange}
          />
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Button
            className="chat raised"
            bsStyle="default"
            type="submit"
            style={{ padding: '10px' }}
          >
            Submit
          </Button>
        </div>
      </form>
    )
    :
    (
      <div onDoubleClick={this.handleDoubleClick}>
        <p >Name: {this.props.profile.name}</p>
      </div>
    );

    const name = (!this.props.profile.gettingName) ? (
      nameComp
    )
    :
    (
      null
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {this.img()}
        <p>ID: {this.props.ID}</p>
        {name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ID: state.reducer.login.ID, profile: state.reducer.profile, AUTHID: state.reducer.login.AUTHID };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
