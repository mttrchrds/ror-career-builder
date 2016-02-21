import React from 'react';
import ReactDOM from 'react-dom';

class Ability extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      abilityStatus: false,
      abilitySelected: false,
      abilityOptionalStatus: false
    };
  }

  setInitialStatus(meterRequirement, pathMeter, currentLevel, minrank, selectedAbilities) {
    // Determine if ability is selected from state of Career i.e. selectedAbilities
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
          abilityOptionalStatus: false
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
    // Add the popup for each ability
    // Using the selector ".ability" here really slows down performance
    // findDOMNode isn't supposed to work in ES6 classes but seems ok... ¯\_(ツ)_/¯
    $(ReactDOM.findDOMNode(this))
      .popup({
        metadata: {
          html: 'html'
        }
      });
  }

  // Render on update
  componentWillReceiveProps(nextProps) {
    // Meter level goes below optional Ability requirement
    // Ability must be deactivated and Mastery points updated
    // e.g. meter level 3, lvl1 path ability selected. Go to level 2, deselect
    // and deactive ability and add point back for meter decrement PLUS deselected ability
    if (this.state.abilitySelected &&
      Number(nextProps.pathMeter) < Number(this.props.details.meterRequirement)) {
      this.setState({
        abilityStatus: false
      });
      this.updateMasteryPoints(Number(this.props.masteryPoints + 2));
    }

    this.setInitialStatus(nextProps.details.meterRequirement,
      nextProps.pathMeter,
      nextProps.currentLevel,
      nextProps.details.minrank,
      nextProps.selectedAbilities);
  }

  // TODO : Does this really need to be a function?
  updateMasteryPoints(masteryPoints) {
    this.props.updateMasteryPoints(masteryPoints);
  }

  abilityClicked(event) {
    // Select ability
    if (this.state.abilitySelected === false) {
      // Active ability selected
      if (this.state.abilityStatus) {

        // Ability is morale
        if (this.props.details.abilityType == 'morale') {
          console.log('SELECTED its a morale');
          // Get current abilityId of morale of this rank
          let userSelectionPropertyName = 'morale' + this.props.moraleRank;
          let currentMoraleRankId = this.props.userSelections[userSelectionPropertyName];
          // Remove current selected morale (for this rank) from selectedAbilities
          // Don't bother if it's not set i.e. zero
          // If this is a Mastery morale rank 4, we need to increment Mastery total too
          // I.e. if current is NOT a mastery total (as we can't detect other Ability)
          if (currentMoraleRankId != '0') {
            if (!this.state.abilityOptionalStatus && this.props.moraleRank == '4') {
              this.updateMasteryPoints(Number(this.props.masteryPoints + 1));
            }
            this.props.setSelectedAbilities(currentMoraleRankId);
          }
          // Then add this ability to selectedAbilities
          this.props.setSelectedAbilities(this.props.details.id);
          // Then add this ability as the selected morale for this rank
          this.props.setUserSelectionMorale(this.props.moraleRank, this.props.details.id);

          // Ability is an optional mastery
          if (this.state.abilityOptionalStatus) {
            // If Mastery points are available then select and decrement total
            if (Number(this.props.masteryPoints) > 0) {
              this.updateMasteryPoints(Number(this.props.masteryPoints - 1));
            }
          }
        }

        // Ability is a tactic
        else if (this.props.details.abilityType == 'tactic'
            || this.props.details.abilityType == 'tomeTactic') {
          // If tactics array length is less than tactic limit i.e. there is room for another selection
          // Add into tactics array
          // Add to selectedAbilities
          if (this.props.userSelections.tactics.length < this.props.currentTacticLimit) {
            this.props.setUserSelectionTactic(this.props.details.id);
            this.props.setSelectedAbilities(this.props.details.id);

            // Ability is an optional mastery
            if (this.state.abilityOptionalStatus) {
              // If Mastery points are available then select and decrement total
              if (Number(this.props.masteryPoints) > 0) {
                this.updateMasteryPoints(Number(this.props.masteryPoints - 1));
              }
            }
          }
        }

        // Ability is core
        else {
          // Ability is an optional mastery
          if (this.state.abilityOptionalStatus) {
            // TODO : This is where the logic for processing optional mastery core abilities will go
          }
        }
      // Inactive ability selected
      } else {

      }
    // Unselect ability
    } else {

      // Ability is morale
      if (this.props.details.abilityType == 'morale') {
        console.log('UNSELECTED its a morale');
        // Remove this abilityId from selectedAbilities
        this.props.setSelectedAbilities(this.props.details.id);
        // If this morale is a selected morale, then reset
        let selectedMoralesArray = [this.props.userSelections.morale1,
                                this.props.userSelections.morale2,
                                this.props.userSelections.morale3,
                                this.props.userSelections.morale4];
        if (selectedMoralesArray.indexOf(this.props.details.id) != -1) {
          console.log('UNSELECTED its currently selected morale');
          this.props.setUserSelectionMorale(this.props.moraleRank, 0);
        }
      }

      // Ability is a tactic
      if (this.props.details.abilityType == 'tactic'
          || this.props.details.abilityType == 'tomeTactic') {
        // Remove this abilityId from selectedAbilities
        this.props.setSelectedAbilities(this.props.details.id);
        // If this tactic is in tactic array, remove it
        if (this.props.userSelections.tactics.indexOf(this.props.details.id) != -1) {
          this.props.setUserSelectionTactic(this.props.details.id);
        }
      }

      // Ability is an optional mastery
      if (this.state.abilityOptionalStatus) {
        console.log('UNSELECTED its an optional mastery');
        this.updateMasteryPoints(Number(this.props.masteryPoints + 1));
        //this.setState({ abilitySelected: false });
      // Ability is core
      } else {
        console.log('UNSELECTED its a core');
        //this.setState({ abilitySelected: false });
      }

    }
  }

  setAbilityClass() {
    let abilityClass = `ability ability--${this.props.details.abilityType} `;

    // Check for optional abilities i.e. whether they can be selected
    if (this.props.details.hasOwnProperty('meterRequirement')
        || this.props.details.abilityType == 'morale'
        || this.props.details.abilityType == 'tactic'
        || this.props.details.abilityType == 'tomeTactic') {
      abilityClass += "ability--optional ";
    }

    if (this.state.abilitySelected) {
        abilityClass += "ability--active is-selected";
    } else {
      if (this.state.abilityStatus === true) {
        abilityClass += "ability--active";
      } else {
        abilityClass += "ability--inactive";
      }
    }
    return abilityClass;
  }

  render() {
    let imgSrc = `../../images/abilities/${this.props.details.image}.png`;
    let popupNote = '';
    if (this.props.details.note) {
      popupNote = `<p class='abilityPopup__note'>${this.props.details.note}</p>`;
    }
    let popupInfo = `<div class='abilityPopup'>
                      <div class='split'>
                        <p class='abilityPopup__name'>${this.props.details.name}</p>
                        <p class='abilityPopup__type'>${this.props.details.type}</p>
                      </div>
                      <div class='split divider'>
                        <p>${this.props.details.spec}</p>
                        <p>Level ${this.props.details.minrank}</p>
                      </div>
                      <div class='split'>
                        <p>${this.props.details.cost}</p>
                        <p>${this.props.details.range}</p>
                      </div>
                      <div class='split last'>
                        <p>${this.props.details.incant}</p>
                        <p>${this.props.details.cooldown}</p>
                      </div>
                      ${popupNote}
                      <p class='description'>${this.props.details.description}</p>
                      </div>`;
    return (
      <div className={this.setAbilityClass()} onClick={this.abilityClicked.bind(this)}
        data-variation="inverted"
        data-html={popupInfo}>
        <img className="ability__image"
          src={imgSrc} alt={this.props.details.name} />
      </div>
    )
  }
}

export default Ability;
