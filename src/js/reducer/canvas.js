import { LOAD } from 'redux-storage';
import { checkValidAdd, checkValidUpdate } from '../api/canvas';

/**
 * Action types
 */
export const ADD_CIRCLE = 'CANVAS/ADD_CIRCLE';
export const UPDATE_CIRCLE = 'CANVAS/UPDATE_CIRCLE';
export const DELETE_CIRCLE = 'CANVAS/DELETE_CIRCLE';

// Initial state
export const initialState = [];

/**
 * Reducer function
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD:
    return [...action.payload.canvas];

  case ADD_CIRCLE:
    return state.concat([action.circle]);

  case UPDATE_CIRCLE:
    return state.map((item, i) => action.index === i ?
      Object.assign({}, item, { [action.field]: +action.val }) :
      item
    );

  case DELETE_CIRCLE:
    return state.filter((_, i) => i !== +action.index);

  default:
    return state;
  }
}

/**
 * Action creators
 *
 * PS: Exporting these functions to facilitate testing.
 * @TODO: This is also an issue, cause it allows external code to 'bypass' business logic
 *        from action dispachers. Find a better solution (in Java we use package scope)
 */
export const addCircleAction = (circle) => ({ type: ADD_CIRCLE, circle });
export const updateCircleAction = (index, field, val) => ({ type: UPDATE_CIRCLE, index, field, val });
export const deleteCircleAction = index => ({ type: DELETE_CIRCLE, index });

/**
 * Action dispachers
 */
export const addCircle = (circle) => (dispatch, getState) => () => {
  try {
    const { canvas, viewport } = getState();

    checkValidAdd(circle, canvas, viewport.width);

    dispatch(addCircleAction(circle));
  } catch (err) {
    //@TODO: Implement better error handling
    console.log(err);
  }
};

export const updateCircle = (index, field) => (dispatch, getState) => event => {
  try {
    const { canvas, viewport } = getState();
    const { value } = event.target;
    const circle = Object.assign({}, canvas[index], { [field]: value });

    checkValidUpdate(index, circle, canvas, viewport.width);

    dispatch(updateCircleAction(index, field, value));
  } catch (err) {
    //@TODO: Implement better error handling
    console.log(err);
  }
};

export const deleteCircle = index => dispatch => () => dispatch(deleteCircleAction(index));
