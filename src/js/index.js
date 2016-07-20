import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './container/app-container';

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
