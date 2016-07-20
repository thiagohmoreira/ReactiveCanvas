import React from 'react';

import Layout from '../layout/main';
import Canvas from '../component/canvas';
import CanvasControl from '../component/canvas-control';
import CircleList from '../component/circle-list';

export default ({actions, circles, viewport}) => (
    <Layout>
      <Canvas circles={circles}  />
      <CanvasControl>
        <CircleList circles={circles} actions={actions} viewport={viewport} />
      </CanvasControl>
    </Layout>
);
