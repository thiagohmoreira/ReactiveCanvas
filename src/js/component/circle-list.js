import React from 'react'

export default ({ actions, circles, viewport }) => (
  <div className='circle-list'>
    <div className='first'>
        <label className='read-only'>#</label>
        <label>X</label>
        <label>Y</label>
        <label>Radius</label>

        {circles.length >= 5 ? null :
          <button className='btn btn-xs' onClick={actions.addCircle()}>+</button>
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
