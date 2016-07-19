import React, { Component, PropTypes } from 'react';

export default class CircleListItem extends Component {
  render() {
    const { id, circle, onRemoveCircleClick } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{circle.x}</td>
        <td>{circle.y}</td>
        <td>{circle.r}</td>
        <td>
          <button onClick={onRemoveCircleClick}>Remove</button>
        </td>
      </tr>
    );
  }
};
