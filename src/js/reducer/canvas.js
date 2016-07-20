import { LOAD } from 'redux-storage';

const ADD_CIRCLE = 'CANVAS/ADD_CIRCLE';
const UPDATE_CIRCLE = 'CANVAS/UPDATE_CIRCLE';
const DELETE_CIRCLE = 'CANVAS/DELETE_CIRCLE';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return [...action.payload.canvas];
    case ADD_CIRCLE:
      return state.concat([{ x: 0, y: 1, r: 10 }]);
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

export const addCircle = () => dispatch => () => dispatch({ type: ADD_CIRCLE });
export const deleteCircle = index => dispatch => () => dispatch({ type: DELETE_CIRCLE, index });
export const updateCircle = (index, field) => dispatch => event => dispatch(
  { type: UPDATE_CIRCLE, index, field, val: event.target.value }
);
