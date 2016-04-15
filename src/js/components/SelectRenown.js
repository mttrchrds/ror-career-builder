import React from 'react';

require('../../scss/SelectLevel.scss');

class SelectRenown extends React.Component {

  changeRenown() {
    this.props.resetSelections();
    this.props.updateRenown(this.refs.renown.value);
    this.props.setMasteryPoints(this.props.currentLevel, this.refs.renown.value);
  }

  render() {
    return (
      <div className="l-select">
        <div className="c-level">
          <label className="c-level__label t-primary" htmlFor="renownSelect">Renown rank</label>
          <select ref="renown"
            onChange={this.changeRenown.bind(this)}
            className="c-level__select" id="renownSelect"
            value={this.props.currentRenown}>
            <option value="10">&lt; 40</option>
            <option value="40">40+</option>
            <option value="50">50+</option>
            <option value="60">60+</option>
            <option value="70">70+</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SelectRenown;
