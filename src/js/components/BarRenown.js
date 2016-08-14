import React from 'react';
import styles from '../../css/components/Bar.css';

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
    <div className="u-margin__bottom--large">
      <div className={styles.BarRenown}>
        <div className={styles.BarProgressRenown} style={calculateBarWidth()}></div>
      </div>
    </div>
  );
};

BarRenown.propTypes = {
  currentLevel: React.PropTypes.number,
  currentRenown: React.PropTypes.number,
};

export default BarRenown;
