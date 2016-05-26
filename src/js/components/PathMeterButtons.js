import React from 'react';
import classNames from 'classnames';
import '../../scss/components/PathMeterButtons.scss';

const PathMeterButtons = (props) => {
  const pathMeterAdd = () => {
    const pathMeterMax = 15;
    const masteryPoints = props.masteryPoints;
    const meterValue = props.pathMeter;
    const masteryPath = props.masteryPath;
    if ((Number(masteryPoints) > 0) && (Number(meterValue) < Number(pathMeterMax))) {
      props.incrementPathMeter(masteryPath);
      props.decrementMasteryPoints();
    }
  };
  const pathMeterRemove = () => {
    const meterValue = props.pathMeter;
    const masteryPath = props.masteryPath;
    if (Number(meterValue) > 0) {
      props.decrementPathMeter(masteryPath);
      props.incrementMasteryPoints();
    }
  };
  const renderMeterLevel = () => {
    const meterLevels = [];
    const meterLevelMax = 15;
    for (let i = 1; i <= meterLevelMax; i++) {
      let thisClass = 'c-meter__level c-meter__level--active';
      if (i <= (meterLevelMax - props.pathMeter)) {
        thisClass = 'c-meter__level';
      }
      meterLevels.push(<div key={props.masteryPath + i} className={thisClass}></div>);
    }
    return meterLevels;
  };
  const plusClass = classNames({
    'pure-button c-button c-button--small c-button--primary u-margin__right--tiny': true,
    'pure-button-disabled': Number(props.masteryPoints) === 0,
  });
  const minusClass = classNames({
    'pure-button c-button c-button--small c-button--primary': true,
    'pure-button-disabled': Number(props.pathMeter < 1),
  });
  return (
    <div>
      <div className="c-meter">
        {renderMeterLevel()}
      </div>
      <button
        className={plusClass}
        onClick={pathMeterAdd}
        type="button"
      >
        <i className="fa fa-plus"></i>
      </button>
      <button
        className={minusClass}
        onClick={pathMeterRemove}
        type="button"
      >
        <i className="fa fa-minus"></i>
      </button>
    </div>
  );
};

PathMeterButtons.propTypes = {
  masteryPoints: React.PropTypes.number,
  pathMeter: React.PropTypes.number,
  masteryPath: React.PropTypes.string,
  incrementPathMeter: React.PropTypes.func,
  decrementPathMeter: React.PropTypes.func,
  decrementMasteryPoints: React.PropTypes.func,
  incrementMasteryPoints: React.PropTypes.func,
};

export default PathMeterButtons;
