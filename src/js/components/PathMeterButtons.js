import React from 'react';
import classNames from 'classnames';
import '../../scss/components/PathMeterButtons.scss';

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
    const masteryPath = this.props.masteryPath;
    if ((Number(masteryPoints) > 0) && (Number(meterValue) < Number(pathMeterMax))) {
      this.props.incrementPathMeter(masteryPath);
      this.props.decrementMasteryPoints();
    }
  }

  pathMeterRemove() {
    const meterValue = this.props.pathMeter;
    const masteryPath = this.props.masteryPath;
    if (Number(meterValue) > 0) {
      this.props.decrementPathMeter(masteryPath);
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
    const plusClass = classNames({
      'pure-button c-button c-button--small c-button--primary u-margin__right--tiny': true,
      'pure-button-disabled': Number(this.props.masteryPoints) === 0,
    });
    const minusClass = classNames({
      'pure-button c-button c-button--small c-button--primary': true,
      'pure-button-disabled': Number(this.props.pathMeter < 1),
    });
    return (
      <div>
        <div className="c-meter">
          {this.renderMeterLevel()}
        </div>
        <button
          className={plusClass}
          onClick={this.pathMeterAdd}
          type="button"><i className="fa fa-plus"></i></button>
        <button
          className={minusClass}
          onClick={this.pathMeterRemove}
          type="button"><i className="fa fa-minus"></i></button>
      </div>
    );
  }

}

export default PathMeterButtons;
