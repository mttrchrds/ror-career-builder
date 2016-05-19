import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';

require('../../scss/components/Ability.scss');

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
        // If tactics array length is less than tactic limit i.e. there is room for another selection
        if (this.props.userSelections.tactics.length < this.props.currentTacticLimit) {
          // Add into tactics array
          this.props.setUserSelectionTactic(this.props.details.id);
          // Add to selectedAbilities
          this.props.setSelectedAbilities(this.props.details.id);
        }
      }
    // Unselect ability
    } else {
      // Remove this abilityId from selectedAbilities
      this.props.setSelectedAbilities(this.props.details.id);
      // If this tactic is in tactic array, remove it
      if (this.props.userSelections.tactics.indexOf(this.props.details.id) !== -1) {
        this.props.setUserSelectionTactic(this.props.details.id);
      }
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

AbilityTactic.propTypes = {
  details: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  currentLevel: React.PropTypes.number,
  selectedAbilities: React.PropTypes.array,
  setSelectedAbilities: React.PropTypes.func,
  userSelections: React.PropTypes.object,
  moraleRank: React.PropTypes.number,
  setUserSelectionTactic: React.PropTypes.func,
  currentTacticLimit: React.PropTypes.number,
};

export default AbilityTactic;
