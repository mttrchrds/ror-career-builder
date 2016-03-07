import React from 'react';

class BarRenown extends React.Component {

  calculateBarWidth() {
    let barWidth = 5;
    switch (Number(this.props.currentRenown)) {
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
    let barStyle = {
      width: `${barWidth}%`
    };
    return barStyle;
  }

  render() {
    return (
      <div id="renownBar" className="ui tiny purple progress">
        <div className="bar" style={this.calculateBarWidth()}></div>
      </div>
    )
  }
}

export default BarRenown;
