import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';

require('../../scss/Ability.scss');

class AbilityMorale extends React.Component {

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

    this.state = {
      abilityStatus: false,
      abilitySelected: false,
      abilityHovered: false,
    };
  }

  // Initial render
  componentDidMount() {
    this.setInitialStatus(
      this.props.currentLevel,
      this.props.details.minrank,
      this.props.selectedAbilities);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(
      nextProps.currentLevel,
      nextProps.details.minrank,
      nextProps.selectedAbilities);
  }

  setInitialStatus(currentLevel, minrank, selectedAbilities) {
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
        // Get current abilityId of morale of this rank e.g. this.state.userSelections.morale4
        const userSelectionPropertyName = `morale${this.props.moraleRank}`;
        const currentMoraleRankId = this.props.userSelections[userSelectionPropertyName];
        // Remove current selected morale (for this rank) from selectedAbilities
        // Don't bother if it's not set i.e. zero
        // If this is a Mastery morale rank 4, we need to increment Mastery total too
        if (currentMoraleRankId !== 0) {
          this.props.setSelectedAbilities(currentMoraleRankId);
          if (this.props.moraleRank === 4) {
            this.props.incrementMasteryPoints();
          }
        }
        // Add this ability to selectedAbilities
        this.props.setSelectedAbilities(this.props.details.id);
        // Then add this ability as the selected morale for this rank
        this.props.setUserSelectionMorale(this.props.moraleRank, this.props.details.id);
      }
    // Unselect ability
    } else {
      // Remove this abilityId from selectedAbilities
      this.props.setSelectedAbilities(this.props.details.id);
      this.props.setUserSelectionMorale(this.props.moraleRank, 0);
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

  render() {
    const abilityClass = classNames({
      [`c-ability c-ability--${this.props.details.abilityType}`]: true,
      'c-ability--optional': true,
      'c-ability--active': this.state.abilityStatus,
      'c-ability--inactive': !this.state.abilityStatus,
      'is-selected': this.state.abilitySelected,
      'is-hovered': this.state.abilityHovered,
      'c-ability--mastery': false,
      'c-popover__parent': true,
    });
    const imgSrc = `../../images/abilities/${this.props.details.image}.png`;
    const popoverContent = (
      <PopoverAbility details={this.props.details} />
    );
    return (
      <div
        className={abilityClass}
        onMouseOver={this.abilityHoverOver} 
        onMouseOut={this.abilityHoverOut} ref="popoverParent"
      >
        <img className="c-ability__image" src={imgSrc} alt={this.props.details.name} onClick={this.abilityClicked} />
        <Popover content={popoverContent} alignment="top" activate={this.state.abilityHovered} />
      </div>
    );
  }
}

AbilityMorale.propTypes = {
  details: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  currentLevel: React.PropTypes.number,
  selectedAbilities: React.PropTypes.array,
  setSelectedAbilities: React.PropTypes.func,
  userSelections: React.PropTypes.object,
  setUserSelectionMorale: React.PropTypes.func,
  moraleRank: React.PropTypes.number,
  incrementMasteryPoints: React.PropTypes.func,
};

export default AbilityMorale;
