import './bootstrap/css/bootstrap.min.css';
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Immutable from 'immutable';

const loggerMiddleware = createLogger();
injectTapEventPlugin();

let oldState;

// toggle this to switch off persistence
const persistence = true; // false;

try {
  oldState = { reducer: JSON.parse(localStorage.getItem('redux1'), (k, v) => {
    if (k === 'tree' || k === 'location' || k === 'search' || k === 'quickSearch') {
      return Immutable.fromJS(v);
    }
    return v;
  }) };
} catch (e) {
  if (e) {
    oldState = undefined;
  }
} finally {
  if (!oldState.reducer) {
    oldState = undefined;
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

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  window.onunload = undefined;
  localStorage.removeItem('redux1');
  // location.reload();
  return false;
};

const history = syncHistoryWithStore(browserHistory, store);
const node = document.getElementById('app');

render(
  <Provider store = {store}>
      <App history={history} />
  </Provider>,
  node
);
