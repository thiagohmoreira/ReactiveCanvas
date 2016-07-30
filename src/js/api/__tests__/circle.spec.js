//Get the real implementation
jest.unmock('../circle');
import * as CircleApi from '../circle';

describe('The circle api', function() {
  it('accept only circles with coordinates equal or greater than zero', () => {
    expect(CircleApi.checkCircle({ x: 0, y: 0, r: 1 }))
      .toBe(true);

    expect(CircleApi.checkCircle({ x: 10, y: 10, r: 1 }))
      .toBe(true);

    expect(() => CircleApi.checkCircle({ x: -1, y: -1, r: 1 }))
      .toThrow(CircleApi.ERROR_INVALID_COORDINATES);
  });

  it('accept only circles with radius equal or greater than one', () => {
    expect(CircleApi.checkCircle({ x: 0, y: 0, r: 1 }))
      .toBe(true);

    expect(CircleApi.checkCircle({ x: 0, y: 0, r: 10 }))
      .toBe(true);

    expect(() => CircleApi.checkCircle({ x: 0, y: 0, r: 0 }))
      .toThrow(CircleApi.ERROR_INVALID_RADIUS);

    expect(() => CircleApi.checkCircle({ x: 0, y: 0, r: -1 }))
      .toThrow(CircleApi.ERROR_INVALID_RADIUS);
  });
});
