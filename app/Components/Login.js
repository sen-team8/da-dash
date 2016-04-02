import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions';
import { Link } from 'react-router';

const Login = (props) => {
  // console.log(props);
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
          <Link className="btn btn-lg btn-primary btn-block"
            onClick={function foo() {props.actions.setCredentials();}}
            to={'loading'}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.todo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
