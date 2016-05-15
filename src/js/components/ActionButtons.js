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
    let saveLink = `${window.location.origin}/career/${this.props.careerShort}/s?`;
    saveLink += `l=${this.props.currentLevel}`;
    saveLink += `&r=${this.props.currentRenown}`;
    saveLink += `&tl=${this.props.currentTacticLimit}`;
    saveLink += `&mp=${this.props.masteryPoints}`;
    saveLink += `&pA=${this.props.pathAMeter}`;
    saveLink += `&pB=${this.props.pathBMeter}`;
    saveLink += `&pC=${this.props.pathCMeter}`;
    saveLink += `&m1=${this.props.morale1}`;
    saveLink += `&m2=${this.props.morale2}`;
    saveLink += `&m3=${this.props.morale3}`;
    saveLink += `&m4=${this.props.morale4}`;
    saveLink += `&sa=${this.props.selectedAbilities}`;
    saveLink += `&ma=${this.props.masteryAbilities}`;
    saveLink += `&t=${this.props.tactics}`;
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
      <div className="l-box l-spacing-left">
        <div className="pure-g">
          <div className="pure-u-1-3">
            <button className="pure-button c-button c-button--tertiary l-float-left" type="button" onClick={this.clickHome}>
              <i className="fa fa-home l-spacing-right--small"></i>
              Home
            </button>
          </div>
          <div className="pure-u-2-3">
            <div className="l-row l-row--right">
              <button className="pure-button c-button c-button--negative l-float-right l-spacing-left" type="button" onClick={this.clickReset}>
                <i className="fa fa-refresh l-spacing-right--small"></i>
                Reset
              </button>
              <button className="pure-button l-spacing-left c-button c-button--secondary l-float-right l-spacing-left" type="button" onClick={this.clickChangeCareer}>
                <i className="fa fa-group l-spacing-right--small"></i>
                Change career
              </button>
              <button className="pure-button l-spacing-left c-button c-button--primary l-float-right l-spacing-left" type="button" onClick={this.clickSave}>
                <i className="fa fa-save l-spacing-right--small"></i>
                Save career
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ActionButtons;