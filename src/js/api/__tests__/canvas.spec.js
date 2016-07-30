//Get the real implementation
jest.unmock('../canvas');
import * as CanvasApi from '../canvas';

describe('The canvas api', function() {
  it('allow circle insertion up to MAX_CIRCLES', () => {
    const circle = { x: 0, y: 0, r: 1 };
    const canvas = [];
    const viewportWidth = 100;

    //Empty canvas
    expect(CanvasApi.checkValidAdd(circle, canvas, viewportWidth))
      .toBe(true);

    //Only one left
    for (var i = 0; i < CanvasApi.MAX_CIRCLES - 1; i++)
      canvas.push(circle);
    expect(CanvasApi.checkValidAdd(circle, canvas, viewportWidth))
      .toBe(true);

    //No more space
    canvas.push(circle);
    expect(() => CanvasApi.checkValidAdd(circle, canvas, viewportWidth))
      .toThrow(CanvasApi.ERROR_MAX_CIRCLES);
  });

  it('allow circle insertion until the diameter sum is less or equal to the viewport width', () => {
    const circle = { x: 0, y: 0, r: 1 };
    const canvas = [{ x: 0, y: 0, r: 49 }];
    const viewportWidth = 100;

    expect(CanvasApi.checkValidAdd(circle, canvas, viewportWidth))
      .toBe(true);

    //No more space
    canvas.push(circle);
    expect(() => CanvasApi.checkValidAdd(circle, canvas, viewportWidth))
      .toThrow(CanvasApi.ERROR_RADIUS_TOO_BIG);
  });

  it('allow circle update until the diameter sum is less or equal to the viewport width', () => {
    const index = 0;
    const ValidCircle = { x: 0, y: 0, r: 48 };
    const invalidCircle = { x: 0, y: 0, r: 50 };
    const canvas = [{ x: 0, y: 0, r: 49 }, { x: 0, y: 0, r: 1 }];
    const viewportWidth = 100;

    expect(CanvasApi.checkValidUpdate(index, ValidCircle, canvas, viewportWidth))
      .toBe(true);

    expect(() => CanvasApi.checkValidUpdate(index, invalidCircle, canvas, viewportWidth))
      .toThrow(CanvasApi.ERROR_RADIUS_TOO_BIG);
  });
});
