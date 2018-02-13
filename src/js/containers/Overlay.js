import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Overlay.css';
import { toggleOverlayShow } from '../actions/actionOverlayShow';
import { toggleSidebar } from '../actions/actionSidebar';

// Overlay is used in a few places. Mainly as background when Sidebar is present, and behind PopoverAbility.
// props.show = is the Overlay rendered at all
// props.visible = is the Overlay rendered as visible or invisible (invisible is used for Popover background)

class Overlay extends Component {

  constructor(props) {
    super(props);

    this.clickOverlay = this.clickOverlay.bind(this);
  }

  componentDidUpdate() {
    if (this.props.overlayShow) {
      document.querySelector('body').classList.add('overflowYHidden');
    } else {
      document.querySelector('body').classList.remove('overflowYHidden');
    }
  }

  clickOverlay() {
    this.props.toggleOverlayShow(!this.props.overlayShow);
    if (this.props.sidebar) {
      this.props.toggleSidebar(!this.props.sidebar);
    }
  }

  render() {
    const overlayClass = classNames({
      [css.overlay]: !this.props.overlayShow,
      [css.overlayActive]: this.props.overlayShow && this.props.overlayVisible,
      [css.overlayActiveInvisible]: this.props.overlayShow && !this.props.overlayVisible,
    });
    return (
      <div className={overlayClass} onClick={this.clickOverlay} />
    );
  }
}

function mapStateToProps({ overlayShow, sidebar }) {
  return {
    sidebar,
    overlayShow
  };
}

export default connect(mapStateToProps, { toggleOverlayShow, toggleSidebar })(Overlay);
