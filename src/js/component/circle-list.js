import React, { Component, PropTypes } from 'react';

export default class CircleList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
};
