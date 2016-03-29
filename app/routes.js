import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Login from './Widgets/Login/login';

export default (
  <Route >
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
  </Route>
);
