import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import rootReducer from './reducer';

// Create the storage engine (using browsers localStorage)
const engine = createEngine('reactive-canvas');
const reduxStorage = storage.createMiddleware(engine);

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk, reduxStorage));

// Load previous saved state
const load = storage.createLoader(engine);
load(store)
  //.then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

export default store;
