import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/SelectRenown.css';

import { setRenown } from '../actions/actionRenown';
import { calculatePoints } from '../actions/actionPoints';
import { resetSelectedMorale1 } from '../actions/actionSelectedMorale1';
import { resetSelectedMorale2 } from '../actions/actionSelectedMorale2';
import { resetSelectedMorale3 } from '../actions/actionSelectedMorale3';
import { resetSelectedMorale4 } from '../actions/actionSelectedMorale4';
import { resetSelectedTactics } from '../actions/actionSelectedTactics';

class SelectRenown extends Component {

  constructor(props) {
    super(props);
    this.changeRenown = this.changeRenown.bind(this);
  }

  changeRenown() {

    // Reset selections
    this.props.resetSelectedMorale1();
    this.props.resetSelectedMorale2();
    this.props.resetSelectedMorale3();
    this.props.resetSelectedMorale4();
    this.props.resetSelectedTactics();

    this.props.setRenown(this.refs.renown.value);
    this.props.calculatePoints(this.props.level, this.refs.renown.value);
    
    // TODO address the functions below
    //this.props.updateMasteryPoints();
  }

  render() {
    return (
      <div className={css.container}>
        <label className={css.label} htmlFor="renownSelect">Renown rank</label>
        <select
          ref="renown"
          onChange={this.changeRenown}
          className={css.select} id="renownSelect"
          value={this.props.renown}
        >
          <option value="10">&lt; 40</option>
          <option value="40">40+</option>
          <option value="50">50+</option>
          <option value="60">60+</option>
          <option value="70">70+</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps({ level, renown }) {
  return {
    level,
    renown
  };
}

export default connect(mapStateToProps, { 
  setRenown,
  calculatePoints,
  resetSelectedMorale1,
  resetSelectedMorale2,
  resetSelectedMorale3,
  resetSelectedMorale4,
  resetSelectedTactics
})(SelectRenown);
