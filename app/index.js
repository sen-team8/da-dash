import './bootstrap/css/bootstrap.min.css';
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';

import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  undefined,
  compose(
    // comment persistState to remove persistence
    persistState('reducer', {
      slicer: (paths) => (state) => {
        return state;
      },
    }),
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(hashHistory, store);
const node = document.createElement('div');

node.setAttribute('id', 'node');
document.body.appendChild(node);

render(
  <Provider store = {store}>
      <App history={history} />
  </Provider>,
  node
);
