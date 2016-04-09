import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  LOGIN_ERROR,
} from '../redux/loginActions';

import { actions } from '../redux/actions';

class Login extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    login: React.PropTypes.object.isRequired,
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    if (this.props.login.STATUS === LOGIN_ERROR) {
      // TODO show error
    } else if (this.props.login.ID && this.props.login.PASS) {
      this.context.router.push('/loading');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.STATUS === LOGIN_ERROR) {
      // TODO show error
    } else if (nextProps.login.ID && nextProps.login.PASS) {
      this.context.router.push('/loading');
    }
  }

  setCredentials = () => {
    const users= {
      id: this.refs.id.value,
      pass: this.refs.pass.value,
    };
    this.props.actions.setCredentials(users);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setCredentials();
  }

  showLoginError = () => {
    if (this.props.login.STATUS==='LOGIN_ERROR') {
      return this.props.login.ERROR;
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', height: '100%' }}>
        <div className="login-wrapper">
          <div className="form-signin" style={{ verticalAlign: 'middle' }}>
            <h2 className="form-signin-heading">Please login<div>{this.showLoginError()}</div></h2>
            <input type="text"
              className="form-control"
              name="username"
              placeholder="Email Address"
              required=""
              autoFocus=""
              ref="id"
            />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required=""
              ref="pass"
            />
            <label className="checkbox">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
            </label>
            <Button className="btn btn-lg btn-primary btn-block"
              onClick={this.setCredentials}
            >
              Login
            </Button>
          </div>

        </div>
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
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
