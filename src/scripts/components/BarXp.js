import React from 'react';

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
      <div id="xpBar" className="ui small yellow progress">
        <div className="bar" style={this.calculateBarWidth()}></div>
      </div>
    )
  }
}

export default BarXp;
