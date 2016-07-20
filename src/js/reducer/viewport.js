import { LOAD } from 'redux-storage';

export const UPDATE_SIZE = 'VIEWPORT/UPDATE_SIZE';

export const initialState = { width: window.innerWidth, height: window.innerHeight };

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

export const updateSizeAction = (width, height) => ({ type: UPDATE_SIZE, width, height });
export const updateSize = (width, height) => dispatch => () => dispatch(updateSizeAction(width, height));
