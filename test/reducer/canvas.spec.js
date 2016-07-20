jest.unmock('../../src/js/reducer/canvas');

 //This is to help ensuring reducers are pure functions
import deepFreeze from 'deep-freeze';

import canvasReducer, { initialState, addCircleAction, updateCircleAction, deleteCircleAction } from '../../src/js/reducer/canvas';

describe('The canvas reducer', function() {
  it('return a clean initial state', () => {
    const stateBefore = undefined;
    const action = { type: 'UNKNOWN' };
    const stateAfer = initialState;

    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });

  it('do nothing with an UNKNOWN action', () => {
    const stateBefore = initialState;
    const action = { type: 'UNKNOWN' };
    const stateAfer = stateBefore;

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toBe(stateAfer);
  });

  it('adds a circle', () => {
    const stateBefore = initialState;
    const action = addCircleAction();
    const stateAfer = [{ x: 0, y: 0, r: 250}];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });

  it('updates a circle', () => {
    const stateBefore = [
      { x: 0, y: 0, r: 15},
      { x: 10, y: 10, r: 35}
    ];
    const action = updateCircleAction(0, 'y', 250);
    const stateAfer = [
      { x: 0, y: 250, r: 15},
      { x: 10, y: 10, r: 35}
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });

  it('removes a circle', () => {
    const stateBefore = [
      { x: 0, y: 0, r: 15},
      { x: 10, y: 10, r: 35}
    ];
    const action = deleteCircleAction(0);
    const stateAfer = [
      { x: 10, y: 10, r: 35}
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });
});
