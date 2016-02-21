import React from 'react';

class SelectRenown extends React.Component {

  changeRenown() {
    this.props.updateRenown(this.refs.renown.value);
    this.props.setMasteryPoints(this.props.currentLevel, this.refs.renown.value);
  }

  render() {
    return (
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <label>Renown rank</label>
            <select ref="renown"
            onChange={this.changeRenown.bind(this)}
            className="ui dropdown" id="renownSelect">
              <option value="10">&lt; 40</option>
              <option value="40">40+</option>
              <option value="50">50+</option>
              <option value="60">60+</option>
              <option value="70">70+</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectRenown;
