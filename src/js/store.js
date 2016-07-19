import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

// App Reducers
import canvasReducer from './reducer/canvas';

// Combine Reducers
const reducers = combineReducers({
    canvasReducer
    // more if you want...
});

const engine = createEngine('reactive-canvas');
const middleware = storage.createMiddleware(engine);

// Create store
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducers);

// Load previous saved state
const load = storage.createLoader(engine);
load(store)
    // .then((newState) => console.log('Loaded state:', newState))
    // .catch(() => console.log('Failed to load previous state'));

export default store;
