import './bootstrap/css/bootstrap.min.css';
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const loggerMiddleware = createLogger();

let oldState;

// toggle this to switch off persistence
const persistence = false;

try {
  oldState = { reducer: JSON.parse(localStorage.getItem('redux1')) };
} catch (e) {
  if (e) {
    oldState = null;
  }
}

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  persistence && oldState,
  compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

window.onunload = () => {
  localStorage.setItem('redux1', JSON.stringify(store.getState().reducer));
};

const history = syncHistoryWithStore(browserHistory, store);
const node = document.createElement('div');

node.setAttribute('id', 'node');
document.body.appendChild(node);

render(
  <Provider store = {store}>
      <App history={history} />
  </Provider>,
  node
);
