import React, { Component, PropTypes } from 'react';

import CircleList from './circle-list';

export default class CanvasControl extends Component {
  render() {
    return (
      <div className='canvas-control'>
        <h3>Canvas Control</h3>
        {this.props.children}
      </div>
    )
  }
};
