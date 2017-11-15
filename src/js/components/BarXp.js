import React from 'react';
import css from '../../css/components/BarXp.css';

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
    <div className={css.bar}>
        <div className={css.progress} style={calculateBarWidth()}></div>
    </div>
  );
};

export default BarXp;
