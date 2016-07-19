import React from 'react';

import CanvasContainer from '../container/canvas-container';
import CanvasControlContainer from '../container/canvas-control-container';

export default React.createClass({
    render: function() {
        return (
          <div>
            <CanvasContainer />
            <CanvasControlContainer />
          </div>
        );
    }
});
