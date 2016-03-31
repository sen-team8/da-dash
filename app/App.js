import React from 'react';
import ToDo from './Widgets/ToDo';
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';

import Login from './Components/Login';
import Loading from './Components/Loading';

class App extends React.Component {

  requireAuth = (nextState, replace) => {
    if (this.props.login.STATUS !== 'LOGGED_IN') {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="app">
        <Router history={this.props.history}>
            <Route path="/" component={ToDo} onEnter={this.requireAuth}>
              <Route path="todo" component={ToDo} />
            </Route>
            <Route path="login" component={Login} />
            <Route path="loading" component={Loading} />

        </Router>
      </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object.isRequired,
  login: React.PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps)(App);
