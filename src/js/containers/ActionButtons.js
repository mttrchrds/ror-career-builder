import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/ActionButtons.css';
import { gaChangeCareer } from '../helpers/googleAnalytics';

import { toggleOverlayShow } from '../actions/actionOverlayShow';
import { toggleSidebar } from '../actions/actionSidebar';
import { resetLevel } from '../actions/actionLevel';
import { resetRenown } from '../actions/actionRenown';
import { resetTacticLimit } from '../actions/actionTacticLimit';
import { resetPoints } from '../actions/actionPoints';
import { resetCurrentPoints } from '../actions/actionCurrentPoints';
import { resetSelectedMorale1 } from '../actions/actionSelectedMorale1';
import { resetSelectedMorale2 } from '../actions/actionSelectedMorale2';
import { resetSelectedMorale3 } from '../actions/actionSelectedMorale3';
import { resetSelectedMorale4 } from '../actions/actionSelectedMorale4';
import { resetSelectedTactics } from '../actions/actionSelectedTactics';
import { resetMasteryAbilities } from '../actions/actionMasteryAbilities';
import { resetMasteryMorales } from '../actions/actionMasteryMorales';
import { resetMasteryTactics } from '../actions/actionMasteryTactics';
import { resetPathMeterA } from '../actions/actionPathMeterA';
import { resetPathMeterB } from '../actions/actionPathMeterB';
import { resetPathMeterC } from '../actions/actionPathMeterC';

class ActionButtons extends Component {

  constructor(props) {
    super(props);
    this.clickHome = this.clickHome.bind(this);
    this.clickShare = this.clickShare.bind(this);
    this.clickChangeCareer = this.clickChangeCareer.bind(this);
    this.clickReset = this.clickReset.bind(this);
  }

  clickHome() {
    console.log('home clicked');
  }

  clickShare() {
    console.log('share clicked');
  }

  clickChangeCareer(e) {
    e.preventDefault();
    this.props.toggleOverlayShow(!this.props.overlayShow);
    this.props.toggleSidebar(!this.props.sidebar);
    gaChangeCareer('ActionButton');
  }

  clickReset(e) {
    e.preventDefault();
    // Reset career selections/attributes/abilities
    this.props.resetLevel();
    this.props.resetRenown();
    this.props.resetTacticLimit();
    this.props.resetPoints();
    this.props.resetCurrentPoints();
    this.props.resetSelectedMorale1();
    this.props.resetSelectedMorale2();
    this.props.resetSelectedMorale3();
    this.props.resetSelectedMorale4();
    this.props.resetSelectedTactics();
    this.props.resetMasteryAbilities();
    this.props.resetMasteryMorales();
    this.props.resetMasteryTactics();
    this.props.resetPathMeterA();
    this.props.resetPathMeterB();
    this.props.resetPathMeterC();
  }

  render() {
    return (
      <div className={css.container}>
        <button className={css.home} type="button" onClick={this.clickHome}>
          Home
        </button>
        <button className={css.share} type="button" onClick={this.clickShare}>
          Share<span className="hidden@mobile"> career</span>
        </button>
        <button className={css.change} type="button" onClick={this.clickChangeCareer}>
          Change<span className="hidden@mobile"> career</span>
        </button>
        <button className={css.reset} type="button" onClick={this.clickReset}>
          Reset
        </button>
      </div>
    );
  }
}

function mapStateToProps({ overlayShow, sidebar }) {
  return {
    overlayShow,
    sidebar
  };
}

export default connect(mapStateToProps,
  {
    toggleOverlayShow,
    toggleSidebar,
    resetRenown,
    resetLevel, 
    resetTacticLimit,
    resetPoints,
    resetCurrentPoints,
    resetSelectedMorale1,
    resetSelectedMorale2,
    resetSelectedMorale3,
    resetSelectedMorale4,
    resetSelectedTactics,
    resetMasteryAbilities,
    resetMasteryMorales,
    resetMasteryTactics,
    resetPathMeterA,
    resetPathMeterB,
    resetPathMeterC
  })
  (ActionButtons);
