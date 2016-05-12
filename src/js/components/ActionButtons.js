import React from 'react';
import { browserHistory } from 'react-router'

require('../../scss/BarXp.scss');

class ActionButtons extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.clickReset = this.clickReset.bind(this);
    this.clickSave = this.clickSave.bind(this);
    this.clickChangeCareer = this.clickChangeCareer.bind(this);
  }

  clickReset() {
    this.props.resetCareer();
  }

  createSaveLink() {
    let saveLink = `${window.location.origin}/career/${this.props.careerShort}/saved?`;
    saveLink += `currentLevel=${this.props.currentLevel}`;
    saveLink += `&currentRenown=${this.props.currentRenown}`;
    saveLink += `&currentTacticLimit=${this.props.currentTacticLimit}`;
    saveLink += `&masteryPoints=${this.props.masteryPoints}`;
    saveLink += `&pathAMeter=${this.props.pathAMeter}`;
    saveLink += `&pathBMeter=${this.props.pathBMeter}`;
    saveLink += `&pathCMeter=${this.props.pathCMeter}`;
    saveLink += `&morale1=${this.props.morale1}`;
    saveLink += `&morale2=${this.props.morale2}`;
    saveLink += `&morale3=${this.props.morale3}`;
    saveLink += `&morale4=${this.props.morale4}`;
    saveLink += `&selectedAbilities=${this.props.selectedAbilities}`;
    saveLink += `&masteryAbilities=${this.props.masteryAbilities}`;
    saveLink += `&tactics=${this.props.tactics}`;
    return saveLink;
  }

  createBBCode(link) {
    return (
      `[url=${link}]RoR.builders - ${this.props.career.name}[/url]`
    )
  }

  buildModalTitle() {
    const url = `/images/icons/${this.props.careerShort}.png`;
    return (
      <h2 className="l-page-title l-page-title--dark l-row">
        <img src={url} className="c-title__icon c-title__icon--small" />
        {this.props.career.name}
      </h2>
    );
  }

  buildModalBody() {
    return (
      <div>
        <p>To save this career simply copy the link below:</p>
        <div className="c-input--read-only" contenteditable>{this.createSaveLink()}</div>
        <p>Alternatively, here is some BBCode to copy and paste into a forum post:</p>
        <div className="c-input--read-only" contenteditable>{this.createBBCode(this.createSaveLink())}</div>
      </div>
    )
  }

  clickSave() {
    this.props.updateModalContent(this.buildModalTitle(), this.buildModalBody());
    this.props.updateOverlayVisibility(true);
    this.props.updateModalVisibility(true);
  }

  clickChangeCareer() {
    this.props.updateOverlayVisibility(true);
    this.props.updateSidebarVisibility(true);
  }

  clickHome() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="l-box l-spacing-left l-row l-row--right">
        <button className="pure-button c-button c-button--tertiary l-row__item l-row__item--align-opposite" type="button" onClick={this.clickHome}>
          <i className="fa fa-home l-spacing-right--small"></i>
          Home
        </button>
        <button className="pure-button c-button c-button--negative" type="button" onClick={this.clickReset}>
          <i className="fa fa-refresh l-spacing-right--small"></i>
          Reset
        </button>
        <button className="pure-button l-spacing-left c-button c-button--secondary" type="button" onClick={this.clickChangeCareer}>
          <i className="fa fa-group l-spacing-right--small"></i>
          Change career
        </button>
        <button className="pure-button l-spacing-left c-button c-button--primary" type="button" onClick={this.clickSave}>
          <i className="fa fa-save l-spacing-right--small"></i>
          Save career
        </button>
      </div>
    )
  }
}

export default ActionButtons;