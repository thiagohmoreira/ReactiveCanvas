import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="reactive-canvas">
        {this.props.children}
      </div>
    )
  }
});
