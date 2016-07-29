import React from 'react';

import CircleList from '../component/circle-list';
import { MAX_CIRCLES, getCirclesLeft, getMaxNewRadius } from '../api/canvas';

export default function CanvasControl({ canvas, viewport, actions }) {
  const circlesLeft = getCirclesLeft(canvas);
  const radiusLeft = getMaxNewRadius(canvas, viewport.width);

  return (
    <div className='canvas-control'>
      <h3>Canvas Control</h3>
      <p>Rules:</p>
      <ul>
        <li>You can add up to {MAX_CIRCLES} circles (<span className={circlesLeft ? null : 'red' }>{circlesLeft} left</span>)</li>
        <li>
            The sum of diameters cannot be larger than
            the viewport width (<span className={radiusLeft ? null : 'red' }>{radiusLeft} radius left</span>)
        </li>
      </ul>
      <CircleList canvas={canvas} viewport={viewport} actions={actions} />
    </div>
  );
}

//Property validation
CanvasControl.displayName = 'CanvasControl';
CanvasControl.propTypes = {
  canvas: React.PropTypes.array.isRequired,
  viewport: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};
