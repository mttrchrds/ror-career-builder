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
      <div className="l-bar l-bar--final">
        <div className="c-progress c-progress--small">
          <div className="c-progress__bar c-progress__bar--purple c-progress__bar--thin" style={this.calculateBarWidth()}></div>
        </div>
      </div>
    )
  }
}

export default BarRenown;
