import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

import Login from './Components/Login';
import Loading from './Components/Loading';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

import Todo from './Widgets/ToDo';


class App extends React.Component {

  shouldComponentUpdate() {
    return false;
  }
  requireAuth = (nextState, replace) => {
    if (this.props.login.STATUS !== 'LOGGED_IN') {
      console.log('am i called');
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
            <Route path="/" component={Home} onEnter={this.requireAuth}>
              <IndexRoute component={Dashboard}/>
              <Route path="todo" component={Todo} />
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
