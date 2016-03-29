import './main.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';

const store = createStore(combineReducers({
  reducer,
  routing: routerReducer,
}));
// const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);
const node = document.createElement('div');

node.setAttribute('id', 'node');
document.body.appendChild(node);


render(
  <Provider store = {store}>
    <Router history={history}>
    {routes}
    </Router>
  </Provider>,
  node
);
