import React from 'react';
import ReactDOM from 'react-dom';
import ReactFauxDOM from 'react-faux-dom';

//@TODO: Find a less hacky way to import D3
//import d3 from 'd3'; - Why this don't work?
const d3 = window.d3;

export default React.createClass({
  render: function () {
    const node = ReactFauxDOM.createElement('svg');

    const svg = d3.select(node)
      .attr('width', window.innerWidth)
      .attr('height', window.innerHeight);

    this.props.circles.map((circle, i) => {
      svg.append('circle')
        .attr('class', 'canvas-circle')
        .attr('id', i)
        .attr('cx', circle.x)
        .attr('cy', circle.y)
        .attr('r', circle.r);
    });

    return node.toReact();
  }
});
