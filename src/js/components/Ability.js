import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';
import Overlay from './Overlay';
import '../../scss/components/Ability.scss';

class Ability extends React.Component {

  /*
  abilityStatus = enabled/disabled
  abilityHovered = ability is currently in hover state
  */
  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.abilityHoverOver = this.abilityHoverOver.bind(this);
    this.abilityHoverOut = this.abilityHoverOut.bind(this);
    // Touch event to replace mouseover/out on mobile size
    this.abilityTouchEnd = this.abilityTouchEnd.bind(this);
    this.setOverlay = this.setOverlay.bind(this);
    this.overlayClicked = this.overlayClicked.bind(this);

    this.state = {
      abilityStatus: false,
      abilityHovered: false,
      overlay: {
        visible: false,
      },
    };
  }

  // Initial render
  componentDidMount() {
    this.setInitialStatus(
      this.props.currentLevel,
      this.props.details.minrank);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(
      nextProps.currentLevel,
      nextProps.details.minrank);
  }

  setInitialStatus(currentLevel, minrank) {
    if (Number(currentLevel) >= Number(minrank)) {
      this.setState({ abilityStatus: true });
    } else {
      this.setState({ abilityStatus: false });
    }
  }

  abilityHoverOver() {
    this.setState({
      abilityHovered: true,
    });
  }

  abilityHoverOut() {
    this.setState({
      abilityHovered: false,
    });
  }

  abilityTouchEnd(event) {
    event.preventDefault();
    this.setOverlay(true);
    this.abilityHoverOver();
  }

  setOverlay(status) {
    this.state.overlay.visible = status;
    this.setState({ 
      overlay: this.state.overlay,
    });
  }

  overlayClicked() {
    this.setOverlay(false);
    this.abilityHoverOut();
  }

  render() {
    const abilityClass = classNames({
      [`c-ability c-ability--${this.props.details.abilityType}`]: true,
      'c-ability--optional': false,
      'c-ability--active': this.state.abilityStatus,
      'c-ability--inactive': !this.state.abilityStatus,
      'is-hovered': this.state.abilityHovered,
      'c-ability--mastery': false,
      'c-popover__parent': true,
    });
    const imgSrc = `../../images/abilities/${this.props.details.image}.png`;
    const popoverContent = (
      <PopoverAbility details={this.props.details} imgSrc={imgSrc} />
    );
    return (
      <div className={abilityClass} ref="popoverParent">
        <Overlay
          overlay={this.state.overlay}
          hideOverlay={this.overlayClicked}
          visible={false}
        />
        <img
          className="c-ability__image"
          src={imgSrc}
          alt={this.props.details.name}
          onTouchEnd={this.abilityTouchEnd}
          onMouseOver={this.abilityHoverOver} 
          onMouseOut={this.abilityHoverOut}
        />
        <Popover 
          content={popoverContent} 
          alignment="top" 
          activate={this.state.abilityHovered}
          abilityOptional={false}
          abilityStatus={this.state.abilityStatus}
          overlayClicked={this.overlayClicked}
        />
      </div>
    );
  }
}

Ability.propTypes = {
  details: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  currentLevel: React.PropTypes.number,
};

export default Ability;
