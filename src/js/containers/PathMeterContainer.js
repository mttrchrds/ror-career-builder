import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/PathMeter.css';

import PathMeter from '../components/PathMeter';
import { setPathMeterA } from '../actions/actionPathMeterA';
import { setPathMeterB } from '../actions/actionPathMeterB';
import { setPathMeterC } from '../actions/actionPathMeterC';
import { setCurrentPoints } from '../actions/actionCurrentPoints';

class PathMeterContainer extends Component {

  constructor(props) {
    super(props);
    this.setPoints = this.setPoints.bind(this);
  }

  setPoints(pathPoints) {
    
    // Set path points depending on which path
    switch (this.props.path) {
      case 'a':
        this.props.setPathMeterA(pathPoints);
        // Set current points
        this.props.setCurrentPoints(this.props.points - (pathPoints + this.props.pathMeterB + this.props.pathMeterC));
        break;
      case 'b':
        this.props.setPathMeterB(pathPoints);
        // Set current points
        this.props.setCurrentPoints(this.props.points - (pathPoints + this.props.pathMeterA + this.props.pathMeterC));
        break;
      case 'c':
        this.props.setPathMeterC(pathPoints);
        // Set current points
        this.props.setCurrentPoints(this.props.points - (pathPoints + this.props.pathMeterA + this.props.pathMeterB));
        break;
    }
  }

  render() {
    let pathPoints = 0;
    // Set path points depending on which path
    switch (this.props.path) {
      case 'a':
        pathPoints = this.props.pathMeterA;
        break;
      case 'b':
        pathPoints = this.props.pathMeterB;
        break;
      case 'c':
        pathPoints = this.props.pathMeterC;
        break;
    }
    return (
      <div>
        <PathMeter 
          points={this.props.currentPoints} 
          pathPoints={pathPoints}
          setPoints={this.setPoints} />
      </div>
      );
  }
}

function mapStateToProps({ points, currentPoints, pathMeterA, pathMeterB, pathMeterC }) {
  return {
    points,
    currentPoints,
    pathMeterA,
    pathMeterB,
    pathMeterC
  };
}

export default connect(mapStateToProps, { setPathMeterA, setPathMeterB, setPathMeterC, setCurrentPoints })(PathMeterContainer);
