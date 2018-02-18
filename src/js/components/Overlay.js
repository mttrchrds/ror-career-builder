import React from 'react';
import classNames from 'classnames';
import css from '../../css/components/Overlay.css';

// Overlay is used in a few places. Mainly as background when Sidebar is present, and behind PopoverAbility.
// hideOverlay determines whether the overlay is active or note
// visible prop determines whether the overlay is invisible when active (e.g. hidden but active with PopoverAbility)

class Overlay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.overlay.visible) {
      document.querySelector('body').classList.add('overflowYHidden');
    } else {
      document.querySelector('body').classList.remove('overflowYHidden');
    }
  }

  render() {
    const overlayClass = classNames({
      [css.overlay]: !this.props.overlay.visible,
      [css.overlayActive]: this.props.overlay.visible && this.props.visible,
      [css.overlayActiveInvisible]: this.props.overlay.visible && !this.props.visible,
    });
    return (
      <div className={overlayClass} onClick={this.props.clickOverlay} />
    );
  }
}

export default Overlay;
