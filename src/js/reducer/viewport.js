import { LOAD } from 'redux-storage';

/**
 * Action types
 */
export const UPDATE_SIZE = 'VIEWPORT/UPDATE_SIZE';

// Initial state
export const initialState = { width: 0, height: 0 };

/**
 * Reducer function
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD:
    return { ...initialState };

  case UPDATE_SIZE:
    return { width: action.width, height: action.height };

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
export const updateSizeAction = (width, height) => ({ type: UPDATE_SIZE, width, height });

/**
 * Action dispachers
 */
export const updateSize = (width, height) => dispatch => () => dispatch(updateSizeAction(width, height));
