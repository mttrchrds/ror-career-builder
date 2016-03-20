import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';

require('../../scss/Ability.scss');

class Ability extends React.Component {

  /*
  abilityStatus = enabled/disabled
  abilitySelected = selected i.e. clicked
  abilityOptionalStatus = is an optional mastery abilitiy i.e. selected via the path meter
  abilityHovered = ability is currently in hover state
  */
  constructor(props) {
    super(props);
    this.state = {
      abilityStatus: false,
      abilitySelected: false,
      abilityOptionalStatus: false,
      abilityHovered: false,
    };
  }

  setInitialStatus(meterRequirement, pathMeter, currentLevel, minrank, selectedAbilities) {
    // Determine if ability is selected (i.e. highlighted) from state of Career i.e. this.state.selectedAbilities
    if (selectedAbilities.indexOf(this.props.details.id) != -1) {
      this.setState({
        abilitySelected: true
      });
    } else {
      this.setState({
        abilitySelected: false
      });
    }
    // Mastery optional abilities
    if (Number(meterRequirement) > 0) {
      if (Number(pathMeter) >= Number(meterRequirement)) {
        this.setState({
          abilityStatus: true,
          abilityOptionalStatus: true
        });
      } else {
        this.setState({
          abilityStatus: false,
          abilityOptionalStatus: true
        });
      }
    // All other abilities
    } else {
      if (Number(currentLevel) >= Number(minrank)) {
        this.setState({ abilityStatus: true });
      } else {
        this.setState({ abilityStatus: false });
      }
    }
  }

  // Initial render
  componentDidMount() {
    this.setInitialStatus(this.props.details.meterRequirement,
                          this.props.pathMeter,
                          this.props.currentLevel,
                          this.props.details.minrank,
                          this.props.selectedAbilities);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(nextProps.details.meterRequirement,
      nextProps.pathMeter,
      nextProps.currentLevel,
      nextProps.details.minrank,
      nextProps.selectedAbilities);

    // Meter level goes below optional Ability requirement
    // Ability must be deactivated and Mastery points updated
    // e.g. meter level 3, lvl1 path ability selected. Go to level 2, deselect
    // and deactive ability and add point back for meter decrement PLUS deselected ability
    if (this.state.abilitySelected &&
      Number(nextProps.pathMeter) < Number(this.props.details.meterRequirement)) {
      this.setState({
        abilityStatus: false,
        abilitySelected: false
      });
      // Remove from selectedAbilities in state
      this.props.setSelectedAbilities(this.props.details.id);
      // Remove from user selections in state i.e. this.state.userSelections
      if (this.props.details.abilityType == 'morale') {
        // If this morale is a selected morale, then reset
        let selectedMoralesArray = [this.props.userSelections.morale1,
                                this.props.userSelections.morale2,
                                this.props.userSelections.morale3,
                                this.props.userSelections.morale4];
        if (selectedMoralesArray.indexOf(this.props.details.id) != -1) {
          this.props.setUserSelectionMorale(this.props.moraleRank, 0);
        }
      }
      else if (this.props.details.abilityType == 'tactic'
          || this.props.details.abilityType == 'tomeTactic') {
        // If this tactic is in tactic array, remove it
        if (this.props.userSelections.tactics.indexOf(this.props.details.id) != -1) {
          this.props.setUserSelectionTactic(this.props.details.id);
        }
      } else {
        // If this ability is in masteryAbilities array, remove it
        if (this.props.userSelections.masteryAbilities.indexOf(this.props.details.id) != -1) {
          this.props.setUserSelectionMasteryAbilities(this.props.details.id);
        }
      }
      console.log('updating mastery: componentWillReceiveProps', nextProps.pathMeter, this.props.details.meterRequirement);
      this.props.updateMasteryPoints(Number(this.props.masteryPoints + 2));
    }
  }

  // TODO : Does this really need to be a function?
  updateMasteryPoints(masteryPoints) {
    this.props.updateMasteryPoints(masteryPoints);
  }

  abilityClicked(event) {
    console.log('ABILITY CLICKED');
    // Select ability i.e. not already selected
    if (this.state.abilitySelected === false) {
      console.log('ABILITY WAS NOT SELECTED, NOW SELECTING');
      // Active ability selected
      if (this.state.abilityStatus) {
        console.log('ABILITY IS ENABLED');
        // Ability is morale
        if (this.props.details.abilityType == 'morale') {
          console.log('ABILITY IS A MORALE');
          // Get current abilityId of morale of this rank e.g. this.state.userSelections.morale4
          let userSelectionPropertyName = 'morale' + this.props.moraleRank;
          let currentMoraleRankId = this.props.userSelections[userSelectionPropertyName];
          // Remove current selected morale (for this rank) from selectedAbilities
          // Don't bother if it's not set i.e. zero
          // If this is a Mastery morale rank 4, we need to increment Mastery total too
          // I.e. if current is NOT a mastery total (as we can't detect other Ability)
          if (currentMoraleRankId != '0') {
            if (!this.state.abilityOptionalStatus && this.props.moraleRank == '4') {
              console.log('ABILITY IS CORE MORALE RANK 4');
              this.props.updateMasteryPoints(Number(this.props.masteryPoints + 1));
            }
            this.props.setSelectedAbilities(currentMoraleRankId);
          }
          // Then add this ability to selectedAbilities
          this.props.setSelectedAbilities(this.props.details.id);
          // Then add this ability as the selected morale for this rank
          this.props.setUserSelectionMorale(this.props.moraleRank, this.props.details.id);

          // Ability is an optional mastery
          if (this.state.abilityOptionalStatus) {
            console.log('ABILITY IS OPTIONAL MASTERY MORALE');
            // If Mastery points are available then select and decrement total
            if (Number(this.props.masteryPoints) > 0) {
              this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
            }
          }
        }

        // Ability is a tactic
        else if (this.props.details.abilityType == 'tactic'
            || this.props.details.abilityType == 'tomeTactic') {
          console.log('ABILITY IS A TACTIC');
          // If tactics array length is less than tactic limit i.e. there is room for another selection
          // Add into tactics array
          // Add to selectedAbilities
          if (this.props.userSelections.tactics.length < this.props.currentTacticLimit) {
            console.log('THERE IS SPACE TO ADD A NEW TACTIC');
            this.props.setUserSelectionTactic(this.props.details.id);
            this.props.setSelectedAbilities(this.props.details.id);

            // Ability is an optional mastery
            if (this.state.abilityOptionalStatus) {
              console.log('ABILITY IS OPTIONAL MASTERY TACTIC');
              // If Mastery points are available then select and decrement total
              if (Number(this.props.masteryPoints) > 0) {
                this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
              }
            }
          }
        }

        // Ability is core
        else {
          console.log('ABILITY IS CORE');
          // Ability is an optional mastery
          if (this.state.abilityOptionalStatus) {
            console.log('ABILITY IS OPTIONAL CORE');
            // Add into masteryAbilities array
            this.props.setUserSelectionMasteryAbilities(this.props.details.id);
            // Add to selectedAbilities
            this.props.setSelectedAbilities(this.props.details.id);
            // If Mastery points are available then select and decrement total
            if (Number(this.props.masteryPoints) > 0) {
              this.props.updateMasteryPoints(Number(this.props.masteryPoints - 1));
            }
          }
        }
      // Inactive ability selected
      } else {

      }
    // Unselect ability
    } else {
      console.log('ABILITY WAS SELECTED, NOW UNSELETING');
      // Ability is morale
      if (this.props.details.abilityType == 'morale') {
        console.log('ABILITY IS MORALE');
        // Remove this abilityId from selectedAbilities
        this.props.setSelectedAbilities(this.props.details.id);
        // If this morale is a selected morale, then reset
        let selectedMoralesArray = [this.props.userSelections.morale1,
                                this.props.userSelections.morale2,
                                this.props.userSelections.morale3,
                                this.props.userSelections.morale4];
        if (selectedMoralesArray.indexOf(this.props.details.id) != -1) {
          console.log('ABILITY WAS A SELECTED MORALE');
          this.props.setUserSelectionMorale(this.props.moraleRank, 0);
        }
        // Ability is an optional mastery
        if (this.state.abilityOptionalStatus) {
          console.log('ABILITY IS OPTIONAL MORALE');
          this.props.updateMasteryPoints(Number(this.props.masteryPoints + 1));
        }
      }

      // Ability is a tactic
      else if (this.props.details.abilityType == 'tactic'
          || this.props.details.abilityType == 'tomeTactic') {
        console.log('ABILITY IS A TACTIC');
        // Remove this abilityId from selectedAbilities
        this.props.setSelectedAbilities(this.props.details.id);
        // If this tactic is in tactic array, remove it
        if (this.props.userSelections.tactics.indexOf(this.props.details.id) != -1) {
          console.log('ABILITY WAS A SELECTED TACTIC');
          this.props.setUserSelectionTactic(this.props.details.id);
        }
        // Ability is an optional mastery
        if (this.state.abilityOptionalStatus) {
          console.log('ABILITY IS OPTIONAL TACTIC');
          this.props.updateMasteryPoints(Number(this.props.masteryPoints + 1));
        }

      // Ability is core
      } else {
        console.log('ABILITY IS CORE');
        // Remove this abilityId from selectedAbilities
        this.props.setSelectedAbilities(this.props.details.id);
        // If this ability is in masteryAbilities array, remove it
        if (this.props.userSelections.masteryAbilities.indexOf(this.props.details.id) != -1) {
          console.log('ABILITY IS OPTIONAL MASTERY CORE');
          this.props.setUserSelectionMasteryAbilities(this.props.details.id);
          // As ability is in masteryAbilities array we don't need to check abilityOptionalStatus
          // Ability is an optional mastery
          this.props.updateMasteryPoints(Number(this.props.masteryPoints + 1));
        }
      }
    }
  }

  abilityHovered(status) {
    this.setState({
      abilityHovered: status
    })
  }

  render() {
    let abilityClass = classNames({
      [`ability ability--${this.props.details.abilityType}`]: true,
      'ability--optional': this.props.details.hasOwnProperty('meterRequirement')
                          || this.props.details.abilityType == 'morale'
                          || this.props.details.abilityType == 'tactic'
                          || this.props.details.abilityType == 'tomeTactic',
      'ability--active': this.state.abilityStatus,
      'ability--inactive': !this.state.abilityStatus,
      'is-selected': this.state.abilitySelected,
      'is-hovered': this.state.abilityHovered
    });
    let imgSrc = `../../images/abilities/${this.props.details.image}.png`;
    // Prepare content for ability Popover
    let popoverNote = '';
    if (this.props.details.note) {
      popoverNote = <p className="abilityContent__note" dangerouslySetInnerHTML={{__html: this.props.details.note}} />;
    }
    let popoverContent = <div className="abilityContent">
                      <div className="split">
                        <p className="abilityContent__name">{this.props.details.name}</p>
                        <p className="abilityContent__type">{this.props.details.type}</p>
                      </div>
                      <div className="split divider">
                        <p>{this.props.details.spec}</p>
                        <p>Level {this.props.details.minrank}</p>
                      </div>
                      <div className="split">
                        <p>{this.props.details.cost}</p>
                        <p>{this.props.details.range}</p>
                      </div>
                      <div className="split last">
                        <p>{this.props.details.incant}</p>
                        <p>{this.props.details.cooldown}</p>
                      </div>
                      {popoverNote}
                      <p className="abilityContent__description" dangerouslySetInnerHTML={{__html: this.props.details.description}} />
                      </div>;
    return (
      <div className={abilityClass} onClick={this.abilityClicked.bind(this)}
        onMouseOver={this.abilityHovered.bind(this, true)} 
        onMouseOut={this.abilityHovered.bind(this, false)} ref="popoverParent" >
        <img className="ability__image" src={imgSrc} alt={this.props.details.name} />
        <Popover content={popoverContent} alignment="top" activate={this.state.abilityHovered} />
      </div>
    )
  }
}

export default Ability;
