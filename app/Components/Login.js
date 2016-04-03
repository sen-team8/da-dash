import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions';
import { Link } from 'react-router';

class Login extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
  }

  setCredentials = () => {
    const users= {
      id: this.refs.id.value,
      pass: this.refs.pass.value,
    };
    this.props.actions.setCredentials(users);
  }

  render() {
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
            <Link className="btn btn-lg btn-primary btn-block"
              onClick={this.setCredentials}
              to={'loading'}
            >
              Login
            </Link>
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
  return { ...state.reducer.todo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
