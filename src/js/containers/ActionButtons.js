import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/ActionButtons.css';
import { gaEvent, gaChangeCareer } from '../helpers/googleAnalytics';
import { MODAL_SHARE } from '../helpers/modalTypes';

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
import { openModal } from '../actions/actionModal';

class ActionButtons extends Component {

  constructor(props) {
    super(props);
    this.clickHome = this.clickHome.bind(this);
    this.clickShare = this.clickShare.bind(this);
    this.clickChangeCareer = this.clickChangeCareer.bind(this);
    this.clickReset = this.clickReset.bind(this);
  }

  clickHome() {
    this.props.history.push('/');
  }

  clickShare() {
    // Set share modal content
    //this.props.updateModalContent(buildModalTitle(), buildModalBody());
    this.props.toggleOverlayShow(!this.props.overlayShow);
    // Open share modal
    this.props.openModal(MODAL_SHARE);
    const careerName = this.props.careers[this.props.slug].name;
    // Send GA events
    if (this.props.selectedMorale1) {
      gaEvent(careerName, 'Selected Morale 1', this.props.abilitiesObject[this.props.selectedMorale1].name, this.props.selectedMorale1);
    }
    if (this.props.selectedMorale2) {
      gaEvent(careerName, 'Selected Morale 2', this.props.abilitiesObject[this.props.selectedMorale2].name, this.props.selectedMorale2);
    }
    if (this.props.selectedMorale3) {
      gaEvent(careerName, 'Selected Morale 3', this.props.abilitiesObject[this.props.selectedMorale3].name, this.props.selectedMorale3);
    }
    if (this.props.selectedMorale4) {
      gaEvent(careerName, 'Selected Morale 4', this.props.abilitiesObject[this.props.selectedMorale4].name, this.props.selectedMorale4);
    }
    if (Number(this.props.selectedTactics.length) > 0) {
      for (const abilityId of this.props.selectedTactics) {
        gaEvent(careerName, 'Selected Tactic', this.props.abilitiesObject[abilityId].name, abilityId);
      }
    }
    // Combine all selected masteries into single array before sending
    let combinedMasteries = [];
    if (this.props.masteryAbilities.length > 0) {
      combinedMasteries = this.props.masteryAbilities;
    }
    if (this.props.masteryMorales.length > 0) {
      if (combinedMasteries.length > 0) {
        combinedMasteries = [...combinedMasteries, ...this.props.masteryMorales];
      } else {
        combinedMasteries = this.props.masteryMorales;
      }
    }
    if (this.props.masteryTactics.length > 0) {
      if (combinedMasteries.length > 0) {
        combinedMasteries = [...combinedMasteries, ...this.props.masteryTactics];
      } else {
        combinedMasteries = this.props.masteryTactics;
      }
    }
    if (Number(combinedMasteries.length) > 0) {
      for (const abilityId of combinedMasteries) {
        gaEvent(careerName, 'Mastery ability', this.props.abilitiesObject[abilityId].name, abilityId);
      }
    }
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

function mapStateToProps({ 
  overlayShow, 
  sidebar,
  careers,
  slug,
  selectedMorale1,
  selectedMorale2,
  selectedMorale3,
  selectedMorale4,
  selectedTactics,
  abilitiesObject,
  masteryAbilities,
  masteryTactics,
  masteryMorales
}) {
  return {
    overlayShow,
    sidebar,
    careers,
    slug,
    selectedMorale1,
    selectedMorale2,
    selectedMorale3,
    selectedMorale4,
    selectedTactics,
    abilitiesObject,
    masteryAbilities,
    masteryTactics,
    masteryMorales
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
    resetPathMeterC,
    openModal
  })
  (ActionButtons);
