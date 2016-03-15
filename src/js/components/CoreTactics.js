import React from 'react';
import Ability from './Ability';

require('../../scss/CoreTactics.scss');

class CoreTactics extends React.Component {

  renderAbility(key) {
    return (
      <Ability key={key} details={this.props.tactics[key]}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
        selectedAbilities={this.props.selectedAbilities}
        currentTacticLimit={this.props.currentTacticLimit}
        setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
        userSelections={this.props.userSelections} />
    )
  }

  render() {
    return (
      <div>
        <h2 className="ui header subHeader">Core Tactics</h2>
        <div className="coreTactics">
          {Object.keys(this.props.tactics).map(this.renderAbility.bind(this))}
        </div>
      </div>
    )
  }

}

export default CoreTactics;
