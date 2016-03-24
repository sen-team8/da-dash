import './main.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

import App from './App';
// import component from './component';
const node = document.createElement('div');
node.setAttribute('id', 'node');
document.body.appendChild(node);

const store = createStore(reducer);

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  node
);
