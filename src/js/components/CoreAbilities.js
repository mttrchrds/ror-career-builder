import React from 'react';
import Ability from './Ability';

class CoreAbilities extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderAbility = this.renderAbility.bind(this);
  }

  renderAbility(key) {
    return (
      <Ability key={key} details={this.props.abilities[key]}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities}
        selectedAbilities={this.props.selectedAbilities}
        userSelections={this.props.userSelections} />
      )
  }

  render() {

    return (
      <div className="u-margin__bottom">
        <div className="c-box">
          <h2 className="c-page-title">Core abilities</h2>
          <div className="o-row">
            {Object.keys(this.props.abilities).map(this.renderAbility)}
          </div>
        </div>
      </div>
    )
  }
}

export default CoreAbilities;
