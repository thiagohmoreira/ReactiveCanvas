jest.unmock('../../src/js/reducer/canvas');

 //This is to help ensuring reducers are pure functions
import deepFreeze from 'deep-freeze';

import canvasReducer, { addCircleAction, updateCircleAction, deleteCircleAction } from '../../src/js/reducer/canvas';

describe('The canvas reducer', function() {
  it('should return a clean initial state', () => {
    const stateBefore = undefined;
    const action = { type: 'UNKNOWN' };
    const stateAfer = [];

    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });

  it('should do nothing with an UNKNOWN action', () => {
    const stateBefore = { foo: 'bar' };
    const action = { type: 'UNKNOWN' };
    const stateAfer = stateBefore;

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toBe(stateAfer);
  });

  it('should add circles', () => {
    const stateBefore = [];
    const action = addCircleAction();
    const stateAfer = [{ x: 0, y: 0, r: 250}];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      canvasReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });

  it('should update circles', () => {
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

  it('should remove circles', () => {
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
