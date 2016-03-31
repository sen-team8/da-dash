import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
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
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </div>
      </div>
    );
  }
}
