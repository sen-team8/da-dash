import './bootstrap/css/bootstrap.min.css';
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(combineReducers({
  reducer,
  routing: routerReducer,
}));
// const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

const node = document.createElement('div');
// console.log(this.props);

node.setAttribute('id', 'node');
document.body.appendChild(node);


render(
  <Provider store = {store}>
      <App history={history} />
  </Provider>,
  node
);
