import React from 'react';
import '../../scss/components/BarXp.scss';

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
        <div className="c-progress">
            <div className="c-progress__bar c-progress__bar--xp" style={calculateBarWidth()}></div>
        </div>
    </div>
  );
};

BarXp.propTypes = {
  currentLevel: React.PropTypes.number,
};

export default BarXp;
