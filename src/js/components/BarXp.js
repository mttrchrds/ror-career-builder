import React from 'react';
import styles from '../../css/components/progress.css';

const BarXp = (props) => {
  const calculateBarWidth = () => {
    const maxLevel = 40;
    const barWidth = Math.round((Number(props.currentLevel) / maxLevel) * 100);
    const barStyle = {
      width: `${barWidth}%`,
    };
    return barStyle;
  };
  return (
    <div className="u-margin__bottom">
        <div className={styles.progressXp}>
            <div className={styles.barXp} style={calculateBarWidth()}></div>
        </div>
    </div>
  );
};

BarXp.propTypes = {
  currentLevel: React.PropTypes.number,
};

export default BarXp;
