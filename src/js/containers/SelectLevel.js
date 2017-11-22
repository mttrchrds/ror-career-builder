import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/SelectLevel.css';

import { setLevel } from '../actions/actionLevel';
import { calculateTacticLimit } from '../actions/actionTacticLimit';
import { calculatePoints } from '../actions/actionPoints';

class SelectLevel extends Component {

  constructor(props) {
    super(props);
    this.changeLevel = this.changeLevel.bind(this);
  }

  generateLevels() {
    let start = 1;
    const end = 40;
    const optionList = [];
    for (start; start <= end; start++) {
      optionList.push(<option key={start} value={start}>{start}</option>);
    }
    return optionList;
  }

  changeLevel() {

    // TODO reset selections when have action creators
    // selectedMorale1: this.state.selectedMorale1,
    // selectedMorale2: this.state.selectedMorale2,
    // selectedMorale3: this.state.selectedMorale3,
    // selectedMorale4: this.state.selectedMorale4,
    // selectedMasteries: this.state.selectedMasteries,
    // selectedTactics: this.state.selectedTactics,
    // this.props.resetSelections();

    this.props.setLevel(this.refs.level.value);
    this.props.calculateTacticLimit(this.refs.level.value);
    this.props.calculatePoints(this.refs.level.value, this.props.renown);
    
    // TODO address the functions below
    //this.props.updateMasteryPoints();
  }

  render() {
    return (
      <div className={css.container}>
        <label className={css.label} htmlFor="levelSelect">Level</label>
        <select
          ref="level"
          onChange={this.changeLevel}
          className={css.select} id="levelSelect"
          value={this.props.level}
        >
          {this.generateLevels()}
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

export default connect(mapStateToProps, { setLevel, calculateTacticLimit, calculatePoints })(SelectLevel);
