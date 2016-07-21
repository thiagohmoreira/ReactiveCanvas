import React from 'react';

import Layout from '../layout/main';
import Canvas from '../component/canvas';
import CanvasControl from '../component/canvas-control';

export default ({actions, circles, viewport}) => (
    <Layout>
      <Canvas circles={circles} viewport={viewport} />
      <CanvasControl circles={circles} viewport={viewport} actions={actions} />
    </Layout>
);
