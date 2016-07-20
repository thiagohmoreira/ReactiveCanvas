import React from 'react'
import { canAddCircle, getMaxNewRadius } from '../api/canvas';

export default ({ actions, circles, viewport }) => {
  const maxRadius = getMaxNewRadius(circles, viewport.width);
  var newCircle = { x: 0, y: 0, r: (maxRadius > 250 ? 250 : maxRadius) };

  return (
    <div className='circle-list'>
      <div className='first'>
          <label className='read-only'>#</label>
          <label>X</label>
          <label>Y</label>
          <label>Radius</label>

          {!canAddCircle(circles) || maxRadius < 1 ? null :
            <button className='btn btn-xs' onClick={actions.addCircle(newCircle)}>+</button>
          }

      </div>
      {circles.map(({ x, y, r }, i) => (
        <div key={i}>
          <span className='read-only'>{i + 1}</span>
          <input type='number' min='0' max={viewport.width} value={x} onChange={actions.updateCircle(i, 'x')} />
          <input type='number' min='0' max={viewport.height} value={y} onChange={actions.updateCircle(i, 'y')} />
          <input type='number' min='1' max='100' value={r} onChange={actions.updateCircle(i, 'r')} />
          <button className='btn btn-xs' onClick={actions.deleteCircle(i)}>X</button>
        </div>)
      )}
    </div>
  );
}
