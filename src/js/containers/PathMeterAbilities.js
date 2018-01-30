import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/PathMeterAbilities.css';

import Ability from './Ability';


class PathMeterAbilities extends Component {

  constructor(props) {
    super(props);
    this.renderAbility = this.renderAbility.bind(this);
  }

  renderAbility(level) {
    const levelProp = `lvl${level}`;
    return (
      <div className={css.ability}>
        <Ability
          data={this.props.abilitiesObject[this.props.abilities.mastery[this.props.path].optionalAbilities[levelProp]]}
        />
      </div>
    )
  }

  render() {
    const abilitiesLevels = [7,6,5,4,3,2,1];
    return (
      <div>
        <div className="column marginLeft--small">
          {
            abilitiesLevels.map(i => this.renderAbility(i))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ abilitiesObject, abilities }) {
  return {
    abilitiesObject,
    abilities
  };
}

export default connect(mapStateToProps, null)(PathMeterAbilities);
