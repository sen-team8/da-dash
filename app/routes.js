import React from 'react';
import { Route } from 'react-router';
import ToDo from './Widgets/ToDo';
import Login from './Components/Login/login';

export default (
  <Route >
    <Route path="/" component={ToDo} />
    <Route path="/login" component={Login} />
  </Route>
);
