jest.unmock('../../src/js/api/canvas');

 //This is to help ensuring reducers are pure functions
import deepFreeze from 'deep-freeze';

import * as CanvasApi from '../../src/js/api/canvas';

describe('The canvas api', function() {
  it('allow circle insertion when there is less then 5 circles already there', () => {
    const canvas = [];

    expect(
      CanvasApi.canAddCircle(canvas)
    ).toBe(true);

    canvas.push(1, 2, 3, 4);

    expect(
      CanvasApi.canAddCircle(canvas)
    ).toBe(true);
  });

  it('disallow circle insertion when there is 5 or more circles', () => {
    const canvas = [1, 2, 3, 4, 5];

    expect(
      CanvasApi.canAddCircle(canvas)
    ).toBe(false);

    canvas.push(6);

    expect(
      CanvasApi.canAddCircle(canvas)
    ).toBe(false);
  });

  it('disallow circle with radius less then 1', () => {
    const circle = { x: 0, y: 0, r: 0};
    const canvas = [{ x: 0, y: 0, r: 1}];
    const viewportWidth = 100;

    expect(
      CanvasApi.isValid(circle, canvas, viewportWidth)
    ).toEqual(CanvasApi.ERROR_INVALID_RADIUS);
  });

  it('disallow circle when the radius sum is bigger then viewport width', () => {
    const circle = { x: 0, y: 0, r: 100};
    const canvas = [{ x: 0, y: 0, r: 1}];
    const viewportWidth = 100;

    expect(
      CanvasApi.isValid(circle, canvas, viewportWidth)
    ).toEqual(CanvasApi.ERROR_RADIUS_TOO_BIG);
  });

  it('allow circle with radius between 1 and radius sum less then viewport width', () => {
    const circle = { x: 0, y: 0, r: 99};
    const canvas = [{ x: 0, y: 0, r: 1}];
    const viewportWidth = 200; //Diameter = 2 * radius!

    expect(
      CanvasApi.isValid(circle, canvas, viewportWidth)
    ).toBe(true);
  });
});
