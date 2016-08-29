import React from 'react';
import classNames from 'classnames';
import css from '../../css/components/PathMeterButtons.css';

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
      let thisClass = css.level;
      if (i <= props.pathMeter) {
        thisClass = css.levelActive;
      } else if (i <= (Number(props.masteryPoints) + Number(props.pathMeter))) {
        thisClass = css.levelAvailable;
      }
      meterLevels.push(<div key={props.masteryPath + i} className={thisClass}>{i}</div>);
    }
    return meterLevels;
  };
  const plusClass = classNames({
    [css.button]: true,
    'marginRight--extra-small': true,
    [css.buttonDisabled]: Number(props.masteryPoints) === 0,
  });
  const minusClass = classNames({
    [css.button]: true,
    [css.buttonDisabled]: Number(props.pathMeter < 1),
  });
  return (
    <div>
      <div className={css.meter}>
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
