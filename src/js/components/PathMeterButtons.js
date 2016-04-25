import React from 'react';

require('../../scss/PathMeterButtons.scss');

class PathMeterButtons extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.pathMeterAdd = this.pathMeterAdd.bind(this);
    this.pathMeterRemove = this.pathMeterRemove.bind(this);
  }

  pathMeterAdd() {
    
    const pathMeterMax = 15;
    const masteryPoints = this.props.masteryPoints;
    const meterValue = this.props.pathMeter;
    if ((Number(masteryPoints) > 0) && (Number(meterValue) < Number(pathMeterMax))) {
      console.log('DEBUG: increasing meter');
      this.props.incrementPath();
      this.props.decrementMasteryPoints();
    }
  }


  pathMeterRemove() {
    
    let meterValue = this.props.pathMeter;
    if (Number(meterValue) > 0) {
      console.log('DEBUG: decreasing meter');
      this.props.decrementPath();
      this.props.incrementMasteryPoints();
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
            onClick={this.pathMeterAdd}
            type="button"><i className="fa fa-plus"></i></button>
          <button
            className="pure-button c-button c-button--small c-button--primary"
            onClick={this.pathMeterRemove}
            type="button"><i className="fa fa-minus"></i></button>
        </div>
    )
  }

}

export default PathMeterButtons;
