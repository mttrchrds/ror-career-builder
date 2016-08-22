import React from 'react';
import css from '../../css/components/BarRenown.css';

const BarRenown = (props) => {
  const calculateBarWidth = () => {
    let barWidth = 5;
    if (Number(props.currentLevel) > 10) {
      switch (Number(props.currentRenown)) {
        case 10:
          barWidth = 5;
          break;
        case 40:
          barWidth = 25;
          break;
        case 50:
          barWidth = 50;
          break;
        case 60:
          barWidth = 75;
          break;
        case 70:
          barWidth = 100;
          break;
        default:
          barWidth = 5;
          break;
      }
    }
    const barStyle = {
      width: `${barWidth}%`,
    };
    return barStyle;
  };
  return (
    <div className={css.bar}>
      <div className={css.progress} style={calculateBarWidth()}></div>
    </div>
  );
};

BarRenown.propTypes = {
  currentLevel: React.PropTypes.number,
  currentRenown: React.PropTypes.number,
};

export default BarRenown;
