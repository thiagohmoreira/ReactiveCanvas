import { LOAD } from 'redux-storage';

export const ADD_CIRCLE = 'CANVAS/ADD_CIRCLE';
export const UPDATE_CIRCLE = 'CANVAS/UPDATE_CIRCLE';
export const DELETE_CIRCLE = 'CANVAS/DELETE_CIRCLE';

export const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return [...action.payload.canvas];

    case ADD_CIRCLE:
      return state.concat([{ x: 0, y: 0, r: 250 }]);

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

export const addCircleAction = () => ({ type: ADD_CIRCLE });
export const addCircle = () => dispatch => () => dispatch(addCircleAction());

export const updateCircleAction = (index, field, val) => ({ type: UPDATE_CIRCLE, index, field, val });
export const updateCircle = (index, field) => dispatch => event => dispatch(updateCircleAction(index, field, event.target.value));

export const deleteCircleAction = index => ({ type: DELETE_CIRCLE, index });
export const deleteCircle = index => dispatch => () => dispatch(deleteCircleAction(index));
