import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import CanvasControl from '../component/canvas-control';
import CircleList from '../component/circle-list';
import CircleListItem from '../component/circle-list-item';

class CanvasControlContainer extends Component {
  render() {
    const { circles } = this.props;
    return (
      <CanvasControl>
        <button
          onClick={() => this.props.onAddClick()}>
            Add
        </button>
        <CircleList>
          {circles.map((circle, id) =>
            <CircleListItem
              key={id}
              id={id}
              circle={circle}
              onRemoveCircleClick={() => this.props.onRemoveClick(id)} />
          )}
        </CircleList>
      </CanvasControl>
    );
  }
};

const stateToProps = (state) => ({
  circles: state.canvasReducer
});

const dispatchToProps = (dispatch) => ({
  onAddClick: () => console.log('add circle was clicked'),
  onRemoveClick: (id) => console.log('remove circle was clicked', id)
});

export default connect(stateToProps, dispatchToProps)(CanvasControlContainer)
