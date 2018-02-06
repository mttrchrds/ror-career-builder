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

  renderTactics() {
    // Combine core and mastery tactics
    let combinedTactics = [];
    if (this.props.masteryTactics.length > 0) {
      combinedTactics = [...this.props.coreTactics, ...this.props.masteryTactics];
    } else {
      combinedTactics = this.props.coreTactics;
    }
    return combinedTactics.map(this.renderTactic);
  }

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.heading}>Tactics</h2>
        <div className="row">
          {this.renderTactics()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ coreTactics, abilitiesObject, masteryTactics }) {
  return {
    abilitiesObject,
    coreTactics,
    masteryTactics
  };
}

export default connect(mapStateToProps, null)(CoreTactics);