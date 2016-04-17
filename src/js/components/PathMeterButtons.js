import React from 'react';

require('../../scss/PathMeterButtons.scss');

class PathMeterButtons extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.changeMasteryPathMeter = this.changeMasteryPathMeter.bind(this);
  }

  updateMasteryTotals(masteryPath, meterValue, masteryPoints) {
    this.props.updatePathMeter(masteryPath, meterValue);
    this.props.updateMasteryPoints(masteryPoints);
  }

  changeMasteryPathMeter(masteryPath, pointAction) {
    
    const pathMeterMax = 15;
    let masteryPoints = this.props.masteryPoints;
    let meterValue = this.props.pathMeter;
    console.log('DEBUG: change points clicked', pointAction, masteryPoints, meterValue);
    if (pointAction == "add") {
      if ((Number(masteryPoints) > 0) && (Number(meterValue) < Number(pathMeterMax))) {
        console.log('DEBUG: increasing meter');
        meterValue++;
        masteryPoints--;
        this.updateMasteryTotals(masteryPath, meterValue, masteryPoints);
      }
    } else {
      if (Number(meterValue) > 0) {
        console.log('DEBUG: decreasing meter');
        meterValue--;
        masteryPoints++;
        this.updateMasteryTotals(masteryPath, meterValue, masteryPoints);
      }
    }
  }

  renderMeterLevel() {
    let meterLevels = [];
    const meterLevelMax = 15
    for (let i = 1; i <= meterLevelMax; i++) {
      let thisClass = 'c-meter__level c-meter__level--active';
      if (i <= (meterLevelMax - this.props.pathMeter)) {
        thisClass = 'c-meter__level';
      }
      meterLevels.push(<div key={this.props.masteryPath + i} className={thisClass}></div>);
    }
    return meterLevels;
  }

  render() {
    return (
        <div>
          <div className="c-meter">
            {this.renderMeterLevel()}
          </div>
          <button
            className="pure-button c-button c-button--small c-button--primary l-spacing-right--tiny"
            onClick={this.changeMasteryPathMeter.bind(null, this.props.masteryPath, 'add')}
            type="button"><i className="fa fa-plus"></i></button>
          <button
            className="pure-button c-button c-button--small c-button--primary"
            onClick={this.changeMasteryPathMeter.bind(null, this.props.masteryPath, 'remove')}
            type="button"><i className="fa fa-minus"></i></button>
        </div>
    )
  }

}

export default PathMeterButtons;
