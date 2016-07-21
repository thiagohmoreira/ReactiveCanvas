import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CanvasActions from '../reducer/canvas';
import viewportReducer, * as ViewportActions from '../reducer/viewport';

import Main from '../component/Main';

class App extends React.Component {
  handleResize() {
    // To be on the safe side, cross-browser size checking...
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.props.store.dispatch(
      ViewportActions.updateSizeAction(width, height)
    );
  };

  componentDidMount() {
    // Wait a while for the redux store to startup
    //@TODO: setTimeout is always a bad sign. Find a better way to ensure store is ready.
    setTimeout(() => this.handleResize(), 500);
    window.addEventListener('resize', () => this.handleResize());
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  };

  render() {
    const { canvas, viewport, dispatch } = this.props;
    const actions = bindActionCreators({ ...CanvasActions, ...ViewportActions }, dispatch);

    return (
      <Main
        circles={canvas}
        actions={actions}
        viewport={viewport} />
    );
  };
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
