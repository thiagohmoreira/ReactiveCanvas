import React from 'react';
import { canAddCircle, getMaxNewRadius } from '../api/canvas';

export default function CircleList({ canvas, viewport, actions }) {
  const maxRadius = getMaxNewRadius(canvas, viewport.width);
  var newCircle = { x: 0, y: 0, r: (maxRadius > 50 ? 50 : maxRadius) };

  return (
    <div className='circle-list'>
      <div className='first'>
          <label className='read-only'>#</label>
          <label>X</label>
          <label>Y</label>
          <label>Radius</label>
          <button className='btn btn-xs'
            onClick={actions.addCircle(newCircle)}
            disabled={!canAddCircle(canvas) || maxRadius < 1}>New</button>
      </div>
      {canvas.map(({ x, y, r }, i) => (
        <div key={i}>
          <span className='read-only'>{i + 1}</span>
          <input type='number' min='0' max={viewport.width} value={x} onChange={actions.updateCircle(i, 'x')} />
          <input type='number' min='0' max={viewport.height} value={y} onChange={actions.updateCircle(i, 'y')} />
          <input type='number' min='1' max={r + maxRadius} value={r} onChange={actions.updateCircle(i, 'r')} />
          <button className='btn btn-xs' onClick={actions.deleteCircle(i)}>X</button>
        </div>)
      )}
    </div>
  );
}

//Property validation
CircleList.displayName = 'CircleList';
CircleList.propTypes = {
  canvas: React.PropTypes.array.isRequired,
  viewport: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};
