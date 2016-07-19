/**
 * Application entry point
 */
import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { addCircle } from './reducer/canvas';

// Layouts
import MainLayout from './layout/main';

// Components
import Home from './component/home';

render((
    <Provider store={store}>
      <MainLayout>
          <Home />
      </MainLayout>
    </Provider>
), document.getElementById('root'));
