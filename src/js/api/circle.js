/**
 * Constant values
 *
 * PS: Exporting these constants to facilitate testing (avoid hardcoding).
 */
export const ERROR_INVALID_COORDINATES = 'Circle coordinates must be equal or greater than zero.';
export const ERROR_INVALID_RADIUS = 'Circle radius must be equal or greater than one.';

/**
 * Circle API
 */
export const checkCircle = (circle) => {
  if (circle.x < 0 || circle.y < 0)
    throw ERROR_INVALID_COORDINATES;

  if (circle.r < 1)
    throw ERROR_INVALID_RADIUS;

  return true;
};
