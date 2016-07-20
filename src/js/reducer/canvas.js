import { LOAD } from 'redux-storage';
import { canAddCircle, getMaxNewRadius, isValid } from '../api/canvas';

export const ADD_CIRCLE = 'CANVAS/ADD_CIRCLE';
export const UPDATE_CIRCLE = 'CANVAS/UPDATE_CIRCLE';
export const DELETE_CIRCLE = 'CANVAS/DELETE_CIRCLE';

export const initialState = [];

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

export const addCircleAction = (circle) => ({ type: ADD_CIRCLE, circle });
export const addCircle = (circle) => (dispatch, getState) => () => {
  const { canvas, viewport } = getState();

  try {
    if (!canAddCircle(canvas))
      throw 'Max number of circles reached.';

    const validCircle = isValid(circle, canvas, viewport.width);
    if (validCircle !== true)
      throw validCircle;

    dispatch(addCircleAction(circle));
  } catch (err) {
    console.log(err);
  }
};

export const updateCircleAction = (index, field, val) => ({ type: UPDATE_CIRCLE, index, field, val });
export const updateCircle = (index, field) => (dispatch, getState) => event => {
  const { canvas, viewport } = getState();
  const { value } = event.target;

  try {
    if (field == 'r') {
      const validCircle = isValid(canvas[index], canvas, viewport.width);
      if (validCircle !== true)
        throw validCircle;
    }

    dispatch(updateCircleAction(index, field, value));
  } catch (err) {
    console.log(err);
  }
};

export const deleteCircleAction = index => ({ type: DELETE_CIRCLE, index });
export const deleteCircle = index => dispatch => () => dispatch(deleteCircleAction(index));
