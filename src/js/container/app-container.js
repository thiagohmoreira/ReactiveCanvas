import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CanvasActions from '../reducer/canvas';
import * as ViewportActions from '../reducer/viewport';
import viewportReducer from '../reducer/viewport';

import Main from '../component/Main';


class App extends React.Component {
  handleResize() {
    //console.log(this.props, this.props.dispatch);
    const { dispatch } = this.props;
    const actions = bindActionCreators({ ...ViewportActions }, dispatch);
    actions.updateSize(window.innerWidth, window.innerHeight);
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize() );
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
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
