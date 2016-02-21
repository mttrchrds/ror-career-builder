import React from 'react';

class PathMeterButtons extends React.Component {

  updateMasteryTotals(masteryPath, meterValue, masteryPoints) {
    this.props.updatePathMeter(masteryPath, meterValue);
    this.props.updateMasteryPoints(masteryPoints);
  }

  changeMasteryPathMeter(masteryPath, pointAction) {
    const pathMeterMax = 15;
    let masteryPoints = this.props.masteryPoints;
    let meterValue = this.props.pathMeter;
    if (pointAction == "add" && Number(masteryPoints) > 0) {
      if (Number(meterValue) < Number(pathMeterMax)) {
        meterValue++;
        masteryPoints--;
        this.updateMasteryTotals(masteryPath, meterValue, masteryPoints);
      }
    }
    if (pointAction == "remove") {
      if (Number(meterValue) > 0) {
        meterValue--;
        masteryPoints++;
        this.updateMasteryTotals(masteryPath, meterValue, masteryPoints);
      }
    }
  }

  render() {
    return (
        <div>
          <button
            onClick={this.changeMasteryPathMeter.bind(this, this.props.masteryPath, 'add')}
            type="button">+</button>
          <button
            onClick={this.changeMasteryPathMeter.bind(this, this.props.masteryPath, 'remove')}
            type="button">-</button>
        </div>
    )
  }

}

export default PathMeterButtons;
