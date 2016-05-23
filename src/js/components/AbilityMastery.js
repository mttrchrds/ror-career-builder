import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';
import Overlay from './Overlay';
import'../../scss/components/Ability.scss';

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
                          this.props.selectedAbilities);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(nextProps.details.meterRequirement,
      nextProps.pathMeter,
      nextProps.selectedAbilities);

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
      // Remove from selectedAbilities in state
      this.props.setSelectedAbilities(this.props.details.id);
      // Remove from user selections in state i.e. this.state.userSelections
      if (this.props.details.abilityType === 'morale') {
        // If this morale is a selected morale, then reset
        const selectedMoralesArray = [this.props.userSelections.morale1,
                                this.props.userSelections.morale2,
                                this.props.userSelections.morale3,
                                this.props.userSelections.morale4];
        if (selectedMoralesArray.indexOf(this.props.details.id) !== -1) {
          this.props.setUserSelectionMorale(this.props.moraleRank, 0);
        }
      } else if (this.props.details.abilityType === 'tactic' || this.props.details.abilityType === 'tomeTactic') {
        // If this tactic is in tactic array, remove it
        if (this.props.userSelections.tactics.indexOf(this.props.details.id) !== -1) {
          this.props.setUserSelectionTactic(this.props.details.id);
        }
      } else {
        // If this ability is in masteryAbilities array, remove it
        if (this.props.userSelections.masteryAbilities.indexOf(this.props.details.id) !== -1) {
          this.props.setUserSelectionMasteryAbilities(this.props.details.id);
        }
      }
      this.props.updateMasteryPoints(Number(this.props.masteryPoints + 2));
    }
  }

  setInitialStatus(meterRequirement, pathMeter, selectedAbilities) {
    // Determine if ability is selected (i.e. highlighted) from state of Career i.e. this.state.selectedAbilities
    if (selectedAbilities.indexOf(this.props.details.id) !== -1) {
      this.setState({
        abilitySelected: true,
      });
    } else {
      this.setState({
        abilitySelected: false,
      });
    }
    
    if (Number(pathMeter) >= Number(meterRequirement)) {
      this.setState({
        abilityStatus: true,
      });
    } else {
      this.setState({
        abilityStatus: false,
      });
    }
    
  }

  abilityClicked() {
    // Select ability i.e. not already selected
    if (this.state.abilitySelected === false) {
      // Active ability selected
      if (this.state.abilityStatus) {
        if (Number(this.props.masteryPoints) > 0) {
          // Ability is morale
          if (this.props.details.abilityType === 'morale') {
              // Get current abilityId of morale of this rank e.g. this.state.userSelections.morale4
              const currentMoraleRankId = this.props.userSelections['morale4'];
              // Remove current selected morale (for this rank) from selectedAbilities
              // Don't bother if it's not set i.e. zero
              if (currentMoraleRankId !== 0) {
                this.props.setSelectedAbilities(currentMoraleRankId);
              }
              // Decrement mastery total
              this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
              // Add this ability to selectedAbilities
              this.props.setSelectedAbilities(this.props.details.id);
              // Add this ability as the selected morale for this rank
              this.props.setUserSelectionMorale(this.props.moraleRank, this.props.details.id);
          } else if (this.props.details.abilityType === 'tactic' || this.props.details.abilityType === 'tomeTactic') {
            // If tactics array length is less than tactic limit i.e. there is room for another selection
            if (this.props.userSelections.tactics.length < this.props.currentTacticLimit) {
                // Add into tactics array
                this.props.setUserSelectionTactic(this.props.details.id);
                // Decrement mastery total
                this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
                // Add this ability to selectedAbilities
                this.props.setSelectedAbilities(this.props.details.id);
            }
          } else {
            // Ability is core
            // Add into masteryAbilities array
            this.props.setUserSelectionMasteryAbilities(this.props.details.id);
            // Decrement mastery total
            this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
            // Add this ability to selectedAbilities
            this.props.setSelectedAbilities(this.props.details.id);
          }
        }
        
      }
      // else {} = Inactive ability selected
    // Unselect ability
    } else {
      // Ability is morale
      if (this.props.details.abilityType === 'morale') {
        this.props.setUserSelectionMorale(this.props.moraleRank, 0);
      // Ability is tactic
      } else if (this.props.details.abilityType === 'tactic' || this.props.details.abilityType === 'tomeTactic') {
        this.props.setUserSelectionTactic(this.props.details.id);
      // Ability is core
      } else {
        this.props.setUserSelectionMasteryAbilities(this.props.details.id);
      }
      // Remove from selectedAbilities
      // Increment Mastery Total
      this.props.setSelectedAbilities(this.props.details.id);
      this.props.updateMasteryPoints(Number(this.props.masteryPoints + 1));
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
    if (Number(this.props.masteryPoints) > 0) {
      if (this.props.details.abilityType === 'tactic' || this.props.details.abilityType === 'tomeTactic') {
        if (this.props.userSelections.tactics.length < this.props.currentTacticLimit) {
          return true;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
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
          abilityOptional={true}
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
  selectedAbilities: React.PropTypes.array,
  setSelectedAbilities: React.PropTypes.func,
  userSelections: React.PropTypes.object,
  setUserSelectionMorale: React.PropTypes.func,
  moraleRank: React.PropTypes.number,
  setUserSelectionTactic: React.PropTypes.func,
  setUserSelectionMasteryAbilities: React.PropTypes.func,
  updateMasteryPoints: React.PropTypes.func,
  masteryPoints: React.PropTypes.number,
  currentTacticLimit: React.PropTypes.number,
};

export default AbilityMastery;
