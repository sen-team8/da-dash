import React from 'react';
import ToDo from './Widgets/ToDo';
import { Router, Route } from 'react-router';
import Login from './Components/Login';

const App = (props) => {
  return (
    <div className="app">
      <Router history={props.history}>
          <Route path="/" component={ToDo}/>
          <Route path="/login" component={Login} index/>
          <Route path="/watcher" component={Login} />
      </Router>
    </div>
  );
};

App.propTypes = {
  history: React.PropTypes.object.isRequired,
};

export default App;
