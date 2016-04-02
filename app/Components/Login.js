import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  LOGIN_ERROR,
} from '../redux/loginActions';

import { actions } from '../redux/actions';

const Login = (props, context) => {
  if (props.login.STATUS === LOGIN_ERROR) {
    // show error
  } else if (props.login.ID && props.login.PASS) {
    context.router.push('/loading');
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div className="login-wrapper">
        <div className="form-signin" style={{ verticalAlign: 'middle' }}>
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autoFocus=""
          />
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
          </label>
          <Button className="btn btn-lg btn-primary btn-block"
            onClick={function foo() {props.actions.setCredentials();}}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

Login.propTypes = {
  login: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
