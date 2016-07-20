import React from 'react';

import Layout from '../layout/main';
import Canvas from '../component/canvas';
import CanvasControl from '../component/canvas-control';
import CircleList from '../component/circle-list';

export default ({actions, circles, viewport}) => (
    <Layout>
      <Canvas circles={circles} viewport={viewport} />
      <CanvasControl>
        <CircleList circles={circles} viewport={viewport} actions={actions} />
      </CanvasControl>
    </Layout>
);
