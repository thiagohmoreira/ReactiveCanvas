 //This is to help ensuring reducers are pure functions
import deepFreeze from 'deep-freeze';

//Get the real implementation
jest.unmock('../../src/js/reducer/viewport');
import viewportReducer, { initialState, updateSizeAction } from '../../src/js/reducer/viewport';

describe('The viewport reducer', function() {
  it('return a clean initial state', () => {
    const stateBefore = undefined;
    const action = { type: 'UNKNOWN' };
    const stateAfer = initialState;

    deepFreeze(action);

    expect(
      viewportReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });

  it('do nothing with an UNKNOWN action', () => {
    const stateBefore = initialState;
    const action = { type: 'UNKNOWN' };
    const stateAfer = stateBefore;

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      viewportReducer(stateBefore, action)
    ).toBe(stateAfer);
  });

  it('updates it\'s size', () => {
    const stateBefore = initialState;
    const action = updateSizeAction(1, 2);
    const stateAfer = { width: 1, height: 2 };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      viewportReducer(stateBefore, action)
    ).toEqual(stateAfer);
  });
});
