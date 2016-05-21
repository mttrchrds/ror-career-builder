import React from 'react';
import classNames from 'classnames';

require('../../scss/components/Overlay.scss');

class Overlay extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.clickOverlay = this.clickOverlay.bind(this);
  }

  componentDidUpdate() {
    if (this.props.overlay.visible) {
      document.querySelector('body').classList.add('u-overflow__y--hidden');
    } else {
      document.querySelector('body').classList.remove('u-overflow__y--hidden');
    }
  }

  clickOverlay() {
    this.props.hideOverlay();
  }

  render() {
    let overlayClass = classNames({
      'c-overlay': true,
      'c-overlay--active': this.props.overlay.visible,
      'c-overlay--invisible': !this.props.visible,
    });
    return (
      <div className={overlayClass} onClick={this.clickOverlay} />
    )
  }
}

export default Overlay;