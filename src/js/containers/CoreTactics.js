import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/CoreAbilities.css';

import AbilityTactic from './AbilityTactic';


class CoreTactics extends Component {

  constructor(props) {
    super(props);
    this.renderTactic = this.renderTactic.bind(this);
  }

  renderTactic(abilityId) {
    return (
      <AbilityTactic key={abilityId} data={this.props.abilitiesObject[abilityId]} />
    )
  }

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.heading}>Tactics</h2>
        <div className="row">
          {this.props.coreTactics.map(this.renderTactic)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ coreTactics, abilitiesObject }) {
  return {
    abilitiesObject,
    coreTactics
  };
}

export default connect(mapStateToProps, null)(CoreTactics);