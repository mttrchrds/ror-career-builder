import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import css from '../../css/components/CareerItem.css';
import { gaCareerSelected } from '../helpers/googleAnalytics';

import { toggleOverlayShow } from '../actions/actionOverlayShow';
import { toggleSidebar } from '../actions/actionSidebar';
import { resetLevel } from '../actions/actionLevel';
import { resetRenown } from '../actions/actionRenown';
import { resetTacticLimit } from '../actions/actionTacticLimit';
import { resetPoints } from '../actions/actionPoints';
import { resetCurrentPoints } from '../actions/actionCurrentPoints';
import { resetCoreAbilities } from '../actions/actionCoreAbilities';
import { resetCoreMorale1 } from '../actions/actionCoreMorale1';
import { resetCoreMorale2 } from '../actions/actionCoreMorale2';
import { resetCoreMorale3 } from '../actions/actionCoreMorale3';
import { resetCoreMorale4 } from '../actions/actionCoreMorale4';
import { resetCoreTactics } from '../actions/actionCoreTactics';
import { resetAbilities } from '../actions/actionAbilities';
import { resetAbilitiesObject } from '../actions/actionAbilitiesObject';
import { resetSelectedMorale1 } from '../actions/actionSelectedMorale1';
import { resetSelectedMorale2 } from '../actions/actionSelectedMorale2';
import { resetSelectedMorale3 } from '../actions/actionSelectedMorale3';
import { resetSelectedMorale4 } from '../actions/actionSelectedMorale4';
import { resetSelectedTactics } from '../actions/actionSelectedTactics';
import { resetMasteryAbilities } from '../actions/actionMasteryAbilities';
import { resetMasteryMorales } from '../actions/actionMasteryMorales';
import { resetMasteryTactics } from '../actions/actionMasteryTactics';

class CareerItem extends Component {
  
  constructor(props) {
    super(props);
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem() {
    // Send event to Google Analytics
    gaCareerSelected(this.props.career.name, this.props.career.class, this.props.career.race);
    // Hide sidebar and overlay
    this.props.toggleSidebar(false);
    this.props.toggleOverlayShow(false);
    // Reset career selections/attributes/abilities
    this.props.resetLevel();
    this.props.resetRenown();
    this.props.resetTacticLimit();
    this.props.resetPoints();
    this.props.resetCurrentPoints();
    this.props.resetCoreAbilities();
    this.props.resetCoreMorale1();
    this.props.resetCoreMorale2();
    this.props.resetCoreMorale3();
    this.props.resetCoreMorale4();
    this.props.resetCoreTactics();
    this.props.resetAbilities();
    this.props.resetAbilitiesObject();
    this.props.resetSelectedMorale1();
    this.props.resetSelectedMorale2();
    this.props.resetSelectedMorale3();
    this.props.resetSelectedMorale4();
    this.props.resetSelectedTactics();
    this.props.resetMasteryAbilities();
    this.props.resetMasteryMorales();
    this.props.resetMasteryTactics();
  }

  render() {
    const url = `/career/${this.props.career.slug}`;
    const imgUrl = `/images/icons/${this.props.career.slug}.png`;
    return (
      <div className={css.item}>
        <Link to={url} onClick={this.clickItem}>
          <img src={imgUrl} className={css.icon} />
        </Link>
        <Link className={css.link} to={url} onClick={this.clickItem}>
          {this.props.career.name}
        </Link>
      </div>
    );
  }

}

function mapStateToProps({ sidebar, overlayShow }) {
  return {
    sidebar,
    overlayShow,
  };
}

export default connect(mapStateToProps,
  { toggleOverlayShow, 
    toggleSidebar, 
    resetRenown,
    resetLevel, 
    resetTacticLimit,
    resetPoints,
    resetCurrentPoints,
    resetCoreAbilities,
    resetCoreMorale1,
    resetCoreMorale2,
    resetCoreMorale3,
    resetCoreMorale4,
    resetCoreTactics,
    resetAbilities,
    resetAbilitiesObject,
    resetSelectedMorale1,
    resetSelectedMorale2,
    resetSelectedMorale3,
    resetSelectedMorale4,
    resetSelectedTactics,
    resetMasteryAbilities,
    resetMasteryMorales,
    resetMasteryTactics
  }
)(CareerItem);