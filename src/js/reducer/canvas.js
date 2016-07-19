import { LOAD } from 'redux-storage';
import { ADD_CIRCLE, DEL_CIRCLE } from '../actions'

/*
 * action creators
 */
export function addCircle(circle) {
  return { type: ADD_CIRCLE, circle };
};

export function delCircle(index) {
  return { type: DEL_CIRCLE, index };
};

/*
 * reducer function
 */
export default function(state = [], action) {
  switch(action.type) {
    case LOAD:
      return [
        ...action.payload.canvasReducer
      ];

    case ADD_CIRCLE:
      return [
        ...state,
        action.circle
      ];

    case DEL_CIRCLE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
