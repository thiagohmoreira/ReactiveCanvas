import React from 'react';

import Layout from '../layout/main';
import Canvas from '../component/canvas';
import CanvasControl from '../component/canvas-control';

export default function Main({ canvas, viewport, actions }) {
  return (
    <Layout>
      <Canvas canvas={canvas} viewport={viewport} />
      <CanvasControl canvas={canvas} viewport={viewport} actions={actions} />
    </Layout>
  );
}

//Property validation
Main.displayName = 'Main';
Main.propTypes = {
  canvas: React.PropTypes.array.isRequired,
  viewport: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};
