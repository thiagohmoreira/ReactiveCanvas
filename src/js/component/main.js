import React from 'react';

import Layout from '../layout/main';
import Canvas from '../component/canvas';
import CanvasControl from '../component/canvas-control';
import CircleList from '../component/circle-list';

import { canAddCircle, getMaxNewRadius } from '../api/canvas';

export default ({actions, circles, viewport}) => (
    <Layout>
      <Canvas circles={circles} viewport={viewport} />
      <CanvasControl>
        <p>Max radius for new circles: {getMaxNewRadius(circles, viewport.width)} ({viewport.width})</p>
        <CircleList circles={circles} viewport={viewport} actions={actions} />
      </CanvasControl>
    </Layout>
);
