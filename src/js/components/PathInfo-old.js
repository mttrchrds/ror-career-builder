import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import Overlay from './Overlay';
import css from '../../css/components/PathInfo.css';

class PathInfo extends React.Component {

  /*
  infoHovered = info is currently in hover state
  */
  constructor(props) {
    super(props);
    this.infoHoverOver = this.infoHoverOver.bind(this);
    this.infoHoverOut = this.infoHoverOut.bind(this);
    // Touch event to replace mouseover/out on mobile size
    this.infoTouchEnd = this.infoTouchEnd.bind(this);
    this.setOverlay = this.setOverlay.bind(this);
    this.overlayClicked = this.overlayClicked.bind(this);

    this.state = {
      infoHovered: false,
      overlay: {
        visible: false,
      },
    };
  }

  infoHoverOver() {
    this.setState({
      infoHovered: true,
    });
  }

  infoHoverOut() {
    this.setState({
      infoHovered: false,
    });
  }

  infoTouchEnd(event) {
    event.preventDefault();
    this.setOverlay(true);
    this.infoHoverOver();
  }

  setOverlay(status) {
    this.state.overlay.visible = status;
    this.setState({
      overlay: this.state.overlay,
    });
  }

  overlayClicked() {
    this.setOverlay(false);
    this.infoHoverOut();
  }

  renderPopoverPrimary() {
    if (this.props.careerPath.popover.primary) {
      return (
        <div className={css.popoverPrimary}>{this.props.careerPath.popover.primary}</div>
      );
    }
    return false;
  }

  renderPopoverSecondary() {
    if (this.props.careerPath.popover.secondary) {
      return (
        <div className={css.popoverSecondary}>{this.props.careerPath.popover.secondary}</div>
      );
    }
    return false;
  }

  renderPopoverContent() {
    return (
      <div>
        {this.renderPopoverPrimary()}
        {this.renderPopoverSecondary()}
      </div>
    )
  }

  render() {
    const infoClass = classNames({
      'is-hovered': this.state.infoHovered,
      popover__parent: true,
    });
    return (
      <div className={infoClass} ref="popoverParent">
        <Overlay
          overlay={this.state.overlay}
          hideOverlay={this.overlayClicked}
          visible={false}
        />
        <div
          className={css.container}
          onTouchEnd={this.infoTouchEnd}
          onMouseOver={this.infoHoverOver}
          onMouseOut={this.infoHoverOut}
        >
          <div className={css.icon}>?</div>
        </div>
        <Popover
          content={this.renderPopoverContent()}
          alignment="top"
          activate={this.state.infoHovered}
          overlayClicked={this.overlayClicked}
        />
      </div>
    );
  }
}


export default PathInfo;
