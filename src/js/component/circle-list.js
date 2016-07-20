import React from 'react'

export default ({ actions, circles, viewport }) => (
  <div className='circle-list'>
    <div>
        <label>ID</label>
        <label>X</label>
        <label>Y</label>
        <label>R</label>
    </div>
    {circles.map(({ x, y, r }, i) => (
      <div key={i}>
        <input type='number' min='0' max={viewport.width} value={x} onChange={actions.updateCircle(i, 'x')} />
        <input type='number' min='0' max={viewport.height} value={y} onChange={actions.updateCircle(i, 'y')} />
        <input type='number' min='1' max='100' value={r} onChange={actions.updateCircle(i, 'r')} />
        <button className='btn btn-xs' onClick={actions.deleteCircle(i)}>X</button>
      </div>)
    )}

    <button className='btn btn-xs' onClick={actions.addCircle()}>Add</button>
  </div>
);
