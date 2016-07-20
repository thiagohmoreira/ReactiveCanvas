export const ERROR_INVALID_RADIUS = 'Radius must be bigger then zero.';
export const ERROR_RADIUS_TOO_BIG = 'Radius value is too big.';


export const canAddCircle = (canvas) => canvas.length < 5;

export const getMaxNewRadius = (canvas, viewportWidth) => {
  var maxRadius = viewportWidth;
  canvas.forEach(circle => { maxRadius -= 2 * circle.r; });

  return maxRadius < 0 ? 0 : maxRadius / 2;
};

export const isValid = (circle, canvas, viewportWidth) => {
  if (circle.r < 1)
    return ERROR_INVALID_RADIUS;

  if (circle.r > getMaxNewRadius(canvas, viewportWidth))
    return ERROR_RADIUS_TOO_BIG;

  return true;
};
