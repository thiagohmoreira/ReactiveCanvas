/**
 * Viewport API
 */
export const getViewportSize = () => {
  let width = 0, height = 0;

  if (typeof window !== 'undefined') {
    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0];

    width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
  }

  return { width, height };
};
