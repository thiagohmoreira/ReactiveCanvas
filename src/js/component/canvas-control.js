import React from 'react';

import CircleList from '../component/circle-list';
import { MAX_CIRCLES, getCirclesLeft, getMaxNewRadius } from '../api/canvas';

export default ({ circles, viewport, actions }) => (
  <div className='canvas-control'>
    <h3>Canvas Control</h3>
    <p>Rules:</p>
    <ul>
      <li>You can add up to {MAX_CIRCLES} circles ({getCirclesLeft(circles)} left)</li>
      <li>
          The sum of diameters cannot be larger than
          the viewport width ({getMaxNewRadius(circles, viewport.width)} radius left)
      </li>
    </ul>
    <CircleList circles={circles} viewport={viewport} actions={actions} />
  </div>
);
