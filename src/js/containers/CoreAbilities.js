import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/CoreAbilities.css';


class CoreAbilities extends Component {

  constructor(props) {
    super(props);
    this.renderAbility = this.renderAbility.bind(this);
  }

  renderAbility(abilityId) {
    return (
      <div key={abilityId}>{this.props.abilities.data[abilityId].name}</div>
    )
  }

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.heading}>Core abilities</h2>
        <div className="row">
          {this.props.coreAbilities.map(this.renderAbility)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ coreAbilities, abilities }) {
  return {
    abilities,
    coreAbilities
  };
}

export default connect(mapStateToProps, null)(CoreAbilities);
