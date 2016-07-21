// Makes sure all Babel ES6 wizardry is available
import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './container/app-container';

//@TODO: Here the store probably didn't needed to be set on the App componet also
//       retrieving it from the context is probably the rigth thing to do.
render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
