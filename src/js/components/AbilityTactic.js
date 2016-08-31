import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';
import Overlay from './Overlay';
import css from '../../css/components/AbilityTactic.css';

class AbilityTactic extends React.Component {

  /*
  abilityStatus = enabled/disabled
  abilitySelected = selected i.e. clicked
  abilityHovered = ability is currently in hover state
  */
  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.abilityClicked = this.abilityClicked.bind(this);
    this.abilityHoverOver = this.abilityHoverOver.bind(this);
    this.abilityHoverOut = this.abilityHoverOut.bind(this);
    // Passed to Popover for mobile selection button. Determine's whether ability is available for selection
    this.abilityOperational = this.abilityOperational.bind(this);
    // Touch event to replace mouseover/out on mobile size
    this.abilityTouchEnd = this.abilityTouchEnd.bind(this);
    this.setOverlay = this.setOverlay.bind(this);
    this.overlayClicked = this.overlayClicked.bind(this);

    this.state = {
      abilityStatus: false,
      abilitySelected: false,
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
      this.props.details.minrank,
      this.props.selectedTactics);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(
      nextProps.currentLevel,
      nextProps.details.minrank,
      nextProps.selectedTactics);
  }

  setInitialStatus(currentLevel, minrank, selectedTactics) {
    // Determine if ability is selected (i.e. highlighted) from state of Career i.e. this.state.selectedAbilities
    if (selectedTactics.indexOf(this.props.details.id) !== -1) {
      this.setState({
        abilitySelected: true,
      });
    } else {
      this.setState({
        abilitySelected: false,
      });
    }
    if (Number(currentLevel) >= Number(minrank)) {
      this.setState({ abilityStatus: true });
    } else {
      this.setState({ abilityStatus: false });
    }
  }

  abilityClicked() {
    // Select ability i.e. not already selected
    if (this.state.abilitySelected === false) {
      // Active ability selected
      if (this.state.abilityStatus) {
        // If tactics array length is less than tactic limit i.e. there is room for another selection
        if (this.props.selectedTactics.length < this.props.currentTacticLimit) {
          // Add into tactics array
          this.props.updateSelectedTactics(this.props.details.id);
        }
      }
    // Unselect ability
    } else {
      // Remove this abilityId from selectedTactics
      this.props.updateSelectedTactics(this.props.details.id);
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

  abilityOperational() {
    if ((this.props.selectedTactics.length < this.props.currentTacticLimit) && this.state.abilityStatus) {
      return true;
    }
    return false;
  }

  abilityTouchEnd(event) {
    event.preventDefault();
    this.setOverlay(true);
    this.abilityHoverOver();
    this.abilityClicked();
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
      [css.ability]: true,
      [css.abilitySelected]: this.state.abilitySelected,
      'is-hovered': this.state.abilityHovered,
      'c-popover__parent': true,
    });
    const abilityImageClass = classNames({
      [css.image]: this.state.abilityStatus,
      [css.imageInactive]: !this.state.abilityStatus,
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
          className={abilityImageClass}
          src={imgSrc}
          alt={this.props.details.name}
          onTouchEnd={this.abilityTouchEnd}
          onMouseOver={this.abilityHoverOver}
          onMouseOut={this.abilityHoverOut}
          onClick={this.abilityClicked}
        />
        <Popover
          content={popoverContent}
          alignment="top"
          activate={this.state.abilityHovered}
          abilityOptional
          abilityStatus={this.state.abilityStatus}
          abilityOperational={this.abilityOperational()}
          abilityClicked={this.abilityClicked}
          abilitySelected={this.state.abilitySelected}
          overlayClicked={this.overlayClicked}
        />
      </div>
    );
  }
}

AbilityTactic.propTypes = {
  details: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  currentLevel: React.PropTypes.number,
  moraleRank: React.PropTypes.number,
  currentTacticLimit: React.PropTypes.number,
  selectedTactics: React.PropTypes.array,
  updateSelectedTactics: React.PropTypes.func,
};

export default AbilityTactic;
