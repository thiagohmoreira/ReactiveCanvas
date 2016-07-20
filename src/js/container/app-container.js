import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CanvasActions from '../reducer/canvas';
import * as ViewportActions from '../reducer/viewport';
import viewportReducer from '../reducer/viewport';

import Main from '../component/Main';

class App extends React.Component {
  handleResize() {
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
    //Wait a while for the redux store to startup
    setTimeout(() => this.handleResize(), 250);
    window.addEventListener('resize', this.handleResize);
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
