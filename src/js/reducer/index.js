import { combineReducers } from 'redux';
import canvas from './canvas';
import viewport from './viewport';

const rootReducer = combineReducers({
  canvas,
  viewport
});

export default rootReducer;
