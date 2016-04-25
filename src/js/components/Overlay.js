import React from 'react';
import classNames from 'classnames';

require('../../scss/Overlay.scss');

class Overlay extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.clickOverlay = this.clickOverlay.bind(this);
  }

  clickOverlay() {
    this.props.updateModalVisibility(false);
    this.props.updateSidebarVisibility(false);
    this.props.updateOverlayVisibility(false);
  }

  render() {
    let overlayClass = classNames({
      'c-overlay': true,
      'c-overlay--active': this.props.overlay.visible,
    });
    return (
      <div className={overlayClass} onClick={this.clickOverlay} />
    )
  }
}

export default Overlay;