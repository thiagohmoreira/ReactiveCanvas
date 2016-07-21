import { combineReducers } from 'redux';
import canvas from './canvas';
import viewport from './viewport';

// Combine all reducers to use on store creation
const rootReducer = combineReducers({
  canvas,
  viewport
});

export default rootReducer;
