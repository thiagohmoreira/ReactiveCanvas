import { checkCircle } from './circle';

/**
 * Constant values
 *
 * PS: Exporting these constants to facilitate testing (avoid hardcoding).
 */
export const MAX_CIRCLES = 5;
export const ERROR_MAX_CIRCLES = 'Maximun number of circles reached.';
export const ERROR_RADIUS_TOO_BIG = 'Circle radius is too big.';

/**
 * Canvas API
 */
export const getCirclesLeft = (canvas) => MAX_CIRCLES - canvas.length;

export const canAddCircle = (canvas) => getCirclesLeft(canvas) > 0;

export const getDiameterSum = (canvas) => {
  var sum = 0;
  canvas.forEach(circle => { sum += circle.r; });

  //Diameter = 2 * Radius =)
  return 2 * sum;
};

export const getMaxNewRadius = (canvas, viewportWidth) => {
  const maxRadius = Math.floor((viewportWidth - getDiameterSum(canvas)) / 2);
  return maxRadius < 0 ? 0 : maxRadius;
};

export const checkValidAdd = (circle, canvas, viewportWidth) => {
  checkCircle(circle);

  if (!canAddCircle(canvas))
    throw ERROR_MAX_CIRCLES;

  if (circle.r > getMaxNewRadius(canvas, viewportWidth))
    throw ERROR_RADIUS_TOO_BIG;

  return true;
};

export const checkValidUpdate = (index, circle, canvas, viewportWidth) => {
  checkCircle(circle);

  if (circle.r > getMaxNewRadius(canvas, viewportWidth) + canvas[index].r)
    throw ERROR_RADIUS_TOO_BIG;

  return true;
};
