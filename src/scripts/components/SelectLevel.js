import React from 'react';

class SelectLevel extends React.Component {

  generateLevels() {
    let start = 1, end = 40, optionList = [];
    for (start; start <= end; start++) {
      optionList.push (<option key={start} value={start}>{start}</option>);
    }
    return optionList;
  }

  changeLevel() {
    this.props.updateLevel(this.refs.level.value);
    this.props.setMasteryPoints(this.refs.level.value, this.props.currentRenown);
    this.props.setCurrentTacticLimit(this.refs.level.value);
    this.props.resetSelections();
  }

  render() {
    return (
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <label>Level</label>
            <select ref="level"
            onChange={this.changeLevel.bind(this)}
            className="ui dropdown" id="levelSelect">
            {this.generateLevels()}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectLevel;
