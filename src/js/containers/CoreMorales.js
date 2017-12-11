import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/CoreMorales.css';

import AbilityMorale from './AbilityMorale';


class CoreMorales extends Component {

  constructor(props) {
    super(props);
    this.renderMorales = this.renderMorales.bind(this);
  }

  renderMorales() {
    return (
      <div className={css.moraleContainer}>
        <div className={css.moraleFirst}>
          <h3 className={css.moraleHeading}>Rank 1</h3>
          <div className="row">
            {this.props.coreMorale1.map(
              (key) => <AbilityMorale key={key} rank="1" data={this.props.abilitiesObject[key]} />
            )}
          </div>
        </div>
        <div className={css.morale}>
          <h3 className={css.moraleHeading}>Rank 2</h3>
          <div className="row">
            {this.props.coreMorale2.map(
              (key) => <AbilityMorale key={key} rank="2" data={this.props.abilitiesObject[key]} />
            )}
          </div>
        </div>
        <div className={css.morale}>
          <h3 className={css.moraleHeading}>Rank 3</h3>
          <div className="row">
            {this.props.coreMorale3.map(
              (key) => <AbilityMorale key={key} rank="3" data={this.props.abilitiesObject[key]} />
            )}
          </div>
        </div>
        <div className={css.moraleLast}>
          <h3 className={css.moraleHeading}>Rank 4</h3>
          <div className="row">
            {this.props.coreMorale4.map(
              (key) => <AbilityMorale key={key} rank="4" data={this.props.abilitiesObject[key]} />
            )}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.heading}>Morales</h2>
        {this.renderMorales()}
      </div>
    );
  }
}

function mapStateToProps({ coreMorale1, coreMorale2, coreMorale3, coreMorale4, abilitiesObject }) {
  return {
    abilitiesObject,
    coreMorale1,
    coreMorale2,
    coreMorale3,
    coreMorale4
  };
}

export default connect(mapStateToProps, null)(CoreMorales);
