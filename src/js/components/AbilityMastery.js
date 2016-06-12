import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';
import Overlay from './Overlay';
import '../../scss/components/Ability.scss';

class AbilityMastery extends React.Component {

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
    this.setInitialStatus(this.props.details.meterRequirement,
                          this.props.pathMeter,
                          this.props.selectedMasteries,
                          this.props.masteryPoints);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(nextProps.details.meterRequirement,
      nextProps.pathMeter,
      nextProps.selectedMasteries,
      nextProps.masteryPoints);

    // Meter level goes below optional Ability requirement
    // Ability must be deactivated and Mastery points updated
    // e.g. meter level 3, lvl1 path ability selected. Go to level 2, deselect
    // and deactive ability and add point back for meter decrement PLUS deselected ability
    if (this.state.abilitySelected &&
      Number(nextProps.pathMeter) > 0 &&
      Number(nextProps.pathMeter) < Number(this.props.details.meterRequirement)) {
      this.setState({
        abilityStatus: false,
        abilitySelected: false,
      });
      // Remove from selectedMasteries in state
      this.props.updateSelectedMasteries(this.props.details.id);
      this.props.updateMasteryPoints(Number(this.props.masteryPoints + 2));
      // Remove from morales
      if (this.props.details.abilityType === 'morale') {
        this.props.updateSelectedMorale(4, this.props.details.id, false);
        this.props.updateCoreMorales(this.props.details.id);
      }
      // Remove from tactics
      if (this.props.details.abilityType === 'tactic') {
        this.props.updateCoreTactics(this.props.details.id);
        this.props.updateSelectedTactics(this.props.details.id, false);
      }
    }
  }

  setInitialStatus(meterRequirement, pathMeter, selectedMasteries, masteryPoints) {
    // Determine if ability is selected (i.e. highlighted) from state of Career i.e. this.state.selectedMasteries
    if (selectedMasteries.indexOf(this.props.details.id) !== -1) {
      this.setState({
        abilitySelected: true,
      });
    } else {
      this.setState({
        abilitySelected: false,
      });
    }
    
    if ((Number(pathMeter) >= Number(meterRequirement)) && (Number(masteryPoints) > 0)) {
      this.setState({
        abilityStatus: true,
      });
    } else {
      this.setState({
        abilityStatus: false,
      });
    }
  }

  setOverlay(status) {
    this.state.overlay.visible = status;
    this.setState({ 
      overlay: this.state.overlay,
    });
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
    if (Number(this.props.masteryPoints) > 0) {
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

  abilityClicked() {
    // Select ability i.e. not already selected
    if (this.state.abilitySelected === false) {
      // Active ability selected
      if (this.state.abilityStatus) {
        if (Number(this.props.masteryPoints) > 0) {
          if (this.props.details.abilityType === 'morale') {
            // Add only to core morales
            this.props.updateCoreMorales(this.props.details.id);
          }
          if (this.props.details.abilityType === 'tactic') {
            // Add only to core tactics
            this.props.updateCoreTactics(this.props.details.id);
          }
          // Decrement mastery total
          this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
          // Add this ability to selectedMasteries
          this.props.updateSelectedMasteries(this.props.details.id);
        }
      }
      // else {} = Inactive ability selected
    // Unselect ability
    } else {
      if (this.props.details.abilityType === 'morale') {
        this.props.updateSelectedMorale(4, this.props.details.id, false);
        this.props.updateCoreMorales(this.props.details.id);
      }
      if (this.props.details.abilityType === 'tactic') {
        // Remove from tactics
        this.props.updateSelectedTactics(this.props.details.id, false);
        this.props.updateCoreTactics(this.props.details.id);
      }
      // Remove from selectedMasteries
      // Increment Mastery Total
      this.props.updateSelectedMasteries(this.props.details.id);
      this.props.updateMasteryPoints(Number(this.props.masteryPoints + 1));
    }
  }

  overlayClicked() {
    this.setOverlay(false);
    this.abilityHoverOut();
  }

  render() {
    const abilityClass = classNames({
      [`c-ability c-ability--${this.props.details.abilityType}`]: true,
      'c-ability--optional': true,
      'c-ability--active': this.state.abilityStatus,
      'c-ability--inactive': !this.state.abilityStatus,
      'is-selected': this.state.abilitySelected,
      'is-hovered': this.state.abilityHovered,
      'c-ability--mastery': true,
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

AbilityMastery.propTypes = {
  details: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  updateMasteryPoints: React.PropTypes.func,
  masteryPoints: React.PropTypes.number,
  selectedMasteries: React.PropTypes.array,
  updateSelectedMasteries: React.PropTypes.func,
  updateCoreTactics: React.PropTypes.func,
  updateSelectedTactics: React.PropTypes.func,
  updateSelectedMorale: React.PropTypes.func,
  updateCoreMorales: React.PropTypes.func,
};

export default AbilityMastery;
