import React from 'react';
import { browserHistory } from 'react-router';
import '../../scss/components/BarXp.scss';

const ActionButtons = (props) => {
  const clickReset = () => {
    props.resetCareer();
  };
  const createSaveLink = () => {
    let saveLink = `${window.location.origin}/career/${props.careerShort}/s?`;
    saveLink += `l=${props.currentLevel}`;
    saveLink += `&r=${props.currentRenown}`;
    saveLink += `&tl=${props.currentTacticLimit}`;
    saveLink += `&mp=${props.masteryPoints}`;
    saveLink += `&pA=${props.pathAMeter}`;
    saveLink += `&pB=${props.pathBMeter}`;
    saveLink += `&pC=${props.pathCMeter}`;
    saveLink += `&m1=${props.morale1}`;
    saveLink += `&m2=${props.morale2}`;
    saveLink += `&m3=${props.morale3}`;
    saveLink += `&m4=${props.morale4}`;
    saveLink += `&sa=${props.selectedAbilities}`;
    saveLink += `&ma=${props.masteryAbilities}`;
    saveLink += `&t=${props.tactics}`;
    return saveLink;
  };
  const createBBCode = (link) => 
    `[url=${link}]RoR.builders - ${props.career.name}[/url]`;
  const buildModalTitle = () => {
    const url = `/images/icons/${props.careerShort}.png`;
    return (
      <h2 className="c-page-title c-page-title--dark o-row">
        <img src={url} className="c-title__icon c-title__icon--small" />
        {props.career.name}
      </h2>
    );
  };
  const buildModalBody = () =>
    <div>
      <p>To save this career simply copy the link below:</p>
      <div className="c-input--read-only" contentEditable>{createSaveLink()}</div>
      <p>Alternatively, here is some BBCode to copy and paste into a forum post:</p>
      <div className="c-input--read-only" contentEditable>{createBBCode(createSaveLink())}</div>
    </div>;
  const clickSave = () => {
    props.updateModalContent(buildModalTitle(), buildModalBody());
    props.updateOverlayVisibility(true);
    props.updateModalVisibility(true);
  };
  const clickChangeCareer = () => {
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
  };
  const clickHome = () => {
    browserHistory.push('/');
  };
  return (
    <div className="c-box u-margin__left-md">
      <button className="pure-button c-button c-button--tertiary" type="button" onClick={clickHome}>
        <i className="fa fa-home u-margin__right--small u-hidden--mobile"></i>
        Home
      </button>
      <button className="pure-button c-button c-button--primary u-float__right u-margin__left" type="button" onClick={clickSave}>
        <i className="fa fa-save u-margin__right--small u-hidden--mobile"></i>
        Save<span className="u-hidden--mobile"> career</span>
      </button>
      <button className="pure-button c-button c-button--secondary u-float__right u-margin__left" type="button" onClick={clickChangeCareer}>
        <i className="fa fa-group u-margin__right--small u-hidden--mobile"></i>
        Change<span className="u-hidden--mobile"> career</span>
      </button>
      <button className="pure-button c-button c-button--negative u-float__right u-margin__left" type="button" onClick={clickReset}>
        <i className="fa fa-refresh u-margin__right--small u-hidden--mobile"></i>
        Reset
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  resetCareer: React.PropTypes.func,
  careerShort: React.PropTypes.string,
  currentLevel: React.PropTypes.number,
  currentRenown: React.PropTypes.number,
  currentTacticLimit: React.PropTypes.number,
  masteryPoints: React.PropTypes.number,
  pathAMeter: React.PropTypes.number,
  pathBMeter: React.PropTypes.number,
  pathCMeter: React.PropTypes.number,
  morale1: React.PropTypes.number,
  morale2: React.PropTypes.number,
  morale3: React.PropTypes.number,
  morale4: React.PropTypes.number,
  selectedAbilities: React.PropTypes.array,
  masteryAbilities: React.PropTypes.array,
  tactics: React.PropTypes.array,
  career: React.PropTypes.object,
  updateModalContent: React.PropTypes.func,
  updateOverlayVisibility: React.PropTypes.func,
  updateModalVisibility: React.PropTypes.func,
  updateSidebarVisibility: React.PropTypes.func,
};

export default ActionButtons;
