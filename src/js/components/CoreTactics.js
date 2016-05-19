import React from 'react';
import AbilityTactic from './AbilityTactic';

class CoreTactics extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderAbility = this.renderAbility.bind(this);
  }

  renderAbility(key) {
    return (
      <AbilityTactic key={key} details={this.props.tactics[key]}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities}
        selectedAbilities={this.props.selectedAbilities}
        currentTacticLimit={this.props.currentTacticLimit}
        setUserSelectionTactic={this.props.setUserSelectionTactic}
        userSelections={this.props.userSelections} />
    )
  }

  render() {
    return (
      <div className="u-margin__bottom">
        <div className="c-box">
          <h2 className="c-page-title">Core tactics</h2>
          <div className="o-row">
            {Object.keys(this.props.tactics).map(this.renderAbility)}
          </div>
        </div>
      </div>
    )
  }

}

export default CoreTactics;
