import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

//import { getUsers } from 'api/user';
import Canvas from '../component/canvas';

class CanvasContainer  extends Component {
    render() {
        return (
            <Canvas {...this.props} />
        );
    }
};

const stateToProps = (state) => ({
      circles: state.canvasReducer
});

const dispatchToProps = function(dispatch) {
    // In a real app, you would 'dispatch' an action here based
    // on the user being clicked
    return {
        onClick: () => console.log('user was clicked')
    }
}

export default connect(stateToProps, dispatchToProps)(CanvasContainer)
