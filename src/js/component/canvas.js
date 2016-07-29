//This library will provide a fake DOM for D3 to operate on.
//This is good because React is the 'DOM owner', we should delegate to it all
//changes, so it keep up the good work ^^
//PS: SVG images are just like regular DOM, pretty cool uh?!
import ReactFauxDOM from 'react-faux-dom';

//@TODO: Find a less hacky way to import D3
//import d3 from 'd3'; - Why this don't work?
const d3 = window.d3;

//@TODO: This implementation is very naive. Improve it.
export default ({canvas, viewport}) => {
  const node = ReactFauxDOM.createElement('svg');

  const svg = d3.select(node)
    .attr('width', viewport.width)
    .attr('height', viewport.height);

  canvas.map((circle, i) => {
    svg.append('circle')
      .attr('class', 'canvas-circle')
      .attr('id', i)
      .attr('cx', circle.x)
      .attr('cy', circle.y)
      .attr('r', circle.r);
  });

  return node.toReact();
};
