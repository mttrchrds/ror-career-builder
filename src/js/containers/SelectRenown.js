import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/SelectRenown.css';

import { setRenown } from '../actions/actionRenown';

class SelectRenown extends Component {

  constructor(props) {
    super(props);
    this.changeRenown = this.changeRenown.bind(this);
  }

  changeRenown() {

    // TODO reset selections when have action creators
    // selectedMorale1: this.state.selectedMorale1,
    // selectedMorale2: this.state.selectedMorale2,
    // selectedMorale3: this.state.selectedMorale3,
    // selectedMorale4: this.state.selectedMorale4,
    // selectedMasteries: this.state.selectedMasteries,
    // selectedTactics: this.state.selectedTactics,
    // this.props.resetSelections();
    this.props.setRenown(this.refs.renown.value);
    
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

function mapStateToProps({ renown }) {
  return {
    renown
  };
}

export default connect(mapStateToProps, { setRenown })(SelectRenown);
