import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from '../component/Main';
import * as CanvasActions from '../reducer/canvas';

class App extends React.Component {
  render() {
    const { canvas, dispatch } = this.props;
    const actions = bindActionCreators({ ...CanvasActions }, dispatch);
    const viewport = { width: 500, height: 600 }; //@TODO: Get real size

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
