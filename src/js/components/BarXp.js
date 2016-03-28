import React from 'react';

require('../../scss/BarXp.scss');

class BarXp extends React.Component {

  calculateBarWidth() {
    const maxLevel = 40;
    let barWidth = Math.round((Number(this.props.currentLevel) / maxLevel) * 100);
    let barStyle = {
      width: `${barWidth}%`
    }
    return barStyle;
  }

  render() {
    return (
      <div className="l-spacing-bottom">
          <div className="c-progress">
              <div className="c-progress__bar c-progress__bar--xp" style={this.calculateBarWidth()}></div>
          </div>
      </div>
    )
  }
}

export default BarXp;
