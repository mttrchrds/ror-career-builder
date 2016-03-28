import React from 'react';
import Ability from './Ability';

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
      <div className="l-spacing-bottom">
        <div className="l-box">
          <h2 className="l-page-title">Core abilities</h2>
          <div className="l-row">
            {Object.keys(this.props.abilities).map(this.renderAbility.bind(this))}
          </div>
        </div>
      </div>
    )
  }
}

export default CoreAbilities;
