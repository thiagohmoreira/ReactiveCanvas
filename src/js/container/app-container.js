import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CanvasActions from '../reducer/canvas';
import * as ViewportActions from '../reducer/viewport';
import { getViewportSize } from '../api/viewport';

import Main from '../component/Main';

class App extends React.Component {
  handleResize() {
    const { store } = this.context,
      viewportSize = getViewportSize();

    store.dispatch(
      ViewportActions.updateSizeAction(
        viewportSize.width,
        viewportSize.height
      )
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { viewport, canvas, dispatch } = this.props;
    const actions = bindActionCreators({ ...CanvasActions, ...ViewportActions }, dispatch);

    return (
      <Main
        viewport={viewport}
        canvas={canvas}
        actions={actions}/>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);

//Property validation
App.displayName = 'App';
App.contextTypes = {
  store: React.PropTypes.object
};
App.propTypes = {
  canvas: React.PropTypes.array.isRequired,
  viewport: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
};
