import React from 'react';

import Layout from '../layout/main';
import Canvas from '../component/canvas';
import CanvasControl from '../component/canvas-control';

export default function Main({ circles, viewport, actions }) {
  return (
    <Layout>
      <Canvas circles={circles} viewport={viewport} />
      <CanvasControl circles={circles} viewport={viewport} actions={actions} />
    </Layout>
  );
}

//Property validation
Main.displayName = 'Main';
Main.propTypes = {
  circles: React.PropTypes.array.isRequired,
  viewport: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};
