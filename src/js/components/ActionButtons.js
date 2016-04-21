import React from 'react';

require('../../scss/BarXp.scss');

class ActionButtons extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.clickReset = this.clickReset.bind(this);
    this.clickSave = this.clickSave.bind(this);
    this.clickChangeCareer = this.clickChangeCareer.bind(this);

    this.state = {
      abilityStatus: false,
      abilitySelected: false,
      abilityOptionalStatus: false,
      abilityHovered: false,
    };
  }

  clickReset() {
    this.props.resetCareer();
  }

  createSaveLink() {
    //http://localhost:3000/career/ironbreaker/saved?currentLevel=31&currentRenown=50&currentTacticLimit=3&masteryPoints=5&pathAMeter=5&pathBMeter=5&pathCMeter=0&selectedAbilities=3755,3756,3759,3740,3753,3764,3765,3772&masteryAbilities=3765,3772&morale1=3755&morale2=3756&morale3=3759&tactics=3740,3753,3764
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
      `[url=${link}]waronlinebuilder.org - ${this.props.career.name}[/url]`
    )
  }

  buildModalTitle() {
    let url = `/images/icons/${this.props.careerShort}.png`;
    return (
      <h2 className="l-page-title l-row">
        <img src={url} className="c-title__icon c-title__icon--small"></img>
        {this.props.career.name} career
      </h2>
    );
  }

  buildModalBody() {
    return (
      <div>
        <p>To share this career simply copy and paste the link below:</p>
        <input type="text" defaultValue={this.createSaveLink()} className="c-input--read-only" />
        <p>Alternatively, here is some BBCode to paste into your forum post:</p>
        <input type="text" defaultValue={this.createBBCode(this.createSaveLink())} className="c-input--read-only" />
      </div>
    )
  }

  clickSave() {
    this.props.updateModalContent(this.buildModalTitle(), this.buildModalBody());
    this.props.updateModalVisibility(true);
  }

  clickChangeCareer() {
    this.props.updateSidebarVisibility(true);
  }

  render() {
    return (
      <div className="l-box l-spacing-left l-row l-row--right">
        <button className="pure-button c-button c-button--tertiary" type="button" onClick={this.clickReset}>
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