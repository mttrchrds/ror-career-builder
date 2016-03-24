import React from 'react';
import Ability from './Ability';

require('../../scss/CoreAbilities.scss');

class CoreAbilities extends React.Component {

  renderAbility(key) {
    return (
      <Ability key={key} details={this.props.abilities[key]}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
        selectedAbilities={this.props.selectedAbilities}
        userSelections={this.props.userSelections} />
      )
  }

  render() {

    return (
      <div className="l-abilities">
        <div className="l-box">
          <h2 className="c-ability-title t-secondary t-secondary__title">Core abilities</h2>
          <div className="l-core-abilities">
            {Object.keys(this.props.abilities).map(this.renderAbility.bind(this))}
          </div>
        </div>
      </div>
    )
  }
}

export default CoreAbilities;
