import React from 'react';
import h from '../helpers';
import Mastery from './Mastery';
import CoreAbilities from './CoreAbilities';
import CoreMorales from './CoreMorales';
import CoreTactics from './CoreTactics';
import Sidebar from './Sidebar';
import CareerTitle from './CareerTitle';
import BarXp from './BarXp';
import BarRenown from './BarRenown';
import Breadcrumb from './Breadcrumb';
import SelectLevel from './SelectLevel';
import SelectRenown from './SelectRenown';
import ActionButtons from './ActionButtons';
import Modal from './Modal';
import Overlay from './Overlay';
import classNames from 'classnames';
import '../../scss/components/Career.scss';

class Career extends React.Component {

  constructor() {
    super();
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.updateLevel = this.updateLevel.bind(this);
    this.setMasteryPoints = this.setMasteryPoints.bind(this);
    this.setCurrentTacticLimit = this.setCurrentTacticLimit.bind(this);
    this.resetSelections = this.resetSelections.bind(this);
    this.updateRenown = this.updateRenown.bind(this);
    this.setSelectedAbilities = this.setSelectedAbilities.bind(this);
    this.setUserSelectionTactic = this.setUserSelectionTactic.bind(this);
    this.setUserSelectionMorale = this.setUserSelectionMorale.bind(this);
    this.updateMasteryPoints = this.updateMasteryPoints.bind(this);
    this.setUserSelectionMasteryAbilities = this.setUserSelectionMasteryAbilities.bind(this);
    this.resetCareer = this.resetCareer.bind(this);
    this.updateModalVisibility = this.updateModalVisibility.bind(this);
    this.updateModalContent = this.updateModalContent.bind(this);
    this.updateSidebarVisibility = this.updateSidebarVisibility.bind(this);
    this.updateOverlayVisibility = this.updateOverlayVisibility.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
    this.incrementMasteryPoints = this.incrementMasteryPoints.bind(this);
    this.decrementMasteryPoints = this.decrementMasteryPoints.bind(this);
    this.incrementPathMeter = this.incrementPathMeter.bind(this);
    this.decrementPathMeter = this.decrementPathMeter.bind(this);
    this.gaCareerSaved = this.gaCareerSaved.bind(this);

    this.state = {
      careers: {},
      career: {},
      abilities: {},
      coreAbilities: {},
      coreMorales: {},
      coreTactics: {},
      pathACoreAbilities: {},
      pathAOptionalAbilities: {},
      pathBCoreAbilities: {},
      pathBOptionalAbilities: {},
      pathCCoreAbilities: {},
      pathCOptionalAbilities: {},
      currentLevel: 1,
      currentRenown: 10,
      masteryPoints: 0,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
      userSelections: {
        morale1: 0,
        morale2: 0,
        morale3: 0,
        morale4: 0,
        tactics: [],
        masteryAbilities: [],
      },
      selectedAbilities: [],
      currentTacticLimit: 0,
      modal: {
        visible: false,
        contentTitle: '',
        contentBody: '',
      },
      sidebar: {
        visible: false,
      },
      overlay: {
        visible: false,
      },
    };
  }

  componentWillReceiveProps() {
    // New career selected, reset selections and load data
    this.resetCareer();
    this.loadCareer();
    this.hideOverlay();
  }

  componentDidMount() {
    this.loadCareer();
  }

  loadCareer() {
    h.getJSON('/json/careers.json', (careers) => {
      if (careers[this.props.params.careerName]) {
        const career = careers[this.props.params.careerName];
        const url = `/json/abilities/${career.code}.json`;
        h.getJSON(url, (abilities) => {
          const imported = h.importJSON(career, abilities);
          this.setState({
            careers,
            careerShort: this.props.params.careerName,
            career,
            abilities: imported.abilities,
            coreAbilities: imported.coreAbilities,
            coreMorales: imported.coreMorales,
            coreTactics: imported.coreTactics,
            pathACoreAbilities: imported.pathACore,
            pathACoreOverflow: imported.pathACoreOverflow,
            pathAOptionalAbilities: imported.pathAOpt,
            pathBCoreAbilities: imported.pathBCore,
            pathBCoreOverflow: imported.pathBCoreOverflow,
            pathBOptionalAbilities: imported.pathBOpt,
            pathCCoreAbilities: imported.pathCCore,
            pathCCoreOverflow: imported.pathCCoreOverflow,
            pathCOptionalAbilities: imported.pathCOpt,
          });
        });
      } else {
        this.setState({
          careers,
        });
      }
      // Check if this is a saved Career URL and update State accordingly
      if (this.props.params.careerSaved === 's') {
        const { query } = this.props.location;
        this.setSavedCareer(query);
      }
    }, (error) => {
      console.warn(error);
    });
  }

  setSavedCareer(query) {
    if (query.l) {
      this.setState({
        currentLevel: Number(query.l),
      });
    }
    if (query.r) {
      this.setState({
        currentRenown: Number(query.r),
      });
    }
    if (query.tl) {
      this.setState({
        currentTacticLimit: Number(query.tl),
      });
    }
    if (query.mp) {
      this.setState({
        masteryPoints: Number(query.mp),
      });
    }
    if (query.pA) {
      this.setState({
        pathAMeter: Number(query.pA),
      });
    }
    if (query.pB) {
      this.setState({
        pathBMeter: Number(query.pB),
      });
    }
    if (query.pC) {
      this.setState({
        pathCMeter: Number(query.pC),
      });
    }
    if (query.sa) {
      query.sa.split(',').forEach((abilityId) => {
        this.state.selectedAbilities.push(Number(abilityId));
      });
    }
    if (query.ma) {
      query.ma.split(',').forEach((abilityId) => {
        this.state.userSelections.masteryAbilities.push(Number(abilityId));
      });
    }
    if (query.m1) {
      this.state.userSelections.morale1 = Number(query.m1);
    }
    if (query.m2) {
      this.state.userSelections.morale2 = Number(query.m2);
    }
    if (query.m3) {
      this.state.userSelections.morale3 = Number(query.m3);
    }
    if (query.m4) {
      this.state.userSelections.morale4 = Number(query.m4);
    }
    if (query.t) {
      query.t.split(',').forEach((abilityId) => {
        this.state.userSelections.tactics.push(Number(abilityId));
      });
    }
    this.setState({
      userSelections: this.state.userSelections,
      selectedAbilities: this.state.selectedAbilities,
    });
  }

  // Update limit on number of tactic slots
  setCurrentTacticLimit(level) {
    let currentLimit = 0;
    if (Number(level) === 40) {
      currentLimit = 4;
    } else if (Number(level) >= 30) {
      currentLimit = 3;
    } else if (Number(level) >= 20) {
      currentLimit = 2;
    } else if (Number(level) >= 10) {
      currentLimit = 1;
    }
    this.setState({
      currentTacticLimit: currentLimit,
    });
  }

  // Add/remove ability to/from selectedAbilities in state
  setSelectedAbilities(abilityId) {
    const abilityIndex = this.state.selectedAbilities.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.selectedAbilities.push(abilityId);
    } else {
      // remove it from array
      this.state.selectedAbilities.splice(abilityIndex, 1);
    }
    this.setState({
      selectedAbilities: this.state.selectedAbilities,
    });
  }

  // Update Mastery ability selection
  setUserSelectionMasteryAbilities(abilityId) {
    const abilityIndex = this.state.userSelections.masteryAbilities.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.userSelections.masteryAbilities.push(abilityId);
    } else {
      // remove it from array
      this.state.userSelections.masteryAbilities.splice(abilityIndex, 1);
    }
    this.setState({
      userSelections: this.state.userSelections,
    });
  }

  // Update tactic selection
  setUserSelectionTactic(abilityId) {
    const abilityIndex = this.state.userSelections.tactics.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.userSelections.tactics.push(abilityId);
    } else {
      // remove it from array
      this.state.userSelections.tactics.splice(abilityIndex, 1);
    }
    this.setState({
      userSelections: this.state.userSelections,
    });
  }

  // Update morale selection
  setUserSelectionMorale(rank, abilityId) {
    const moraleName = `morale${rank}`;
    this.state.userSelections[moraleName] = abilityId;
    this.setState({
      userSelections: this.state.userSelections,
    });
  }

  // Calculate mastery points available based on char level and renown level
  setMasteryPoints(level, renown) {
    let points = 0;
    if (Number(level) > 10) {
      if (Number(level) > 20) {
        points = level - 15;
      } else {
        if (Number(level) > 18) {
          points = 5;
        } else if (Number(level) > 16) {
          points = 4;
        } else if (Number(level) > 14) {
          points = 3;
        } else if (Number(level) > 12) {
          points = 2;
        } else {
          points = 1;
        }
      }
      switch (Number(renown)) {
        case 40:
          points = points + 1;
          break;
        case 50:
          points = points + 2;
          break;
        case 60:
          points = points + 3;
          break;
        case 70:
          points = points + 4;
          break;
        default:
          break;
      }
    }
    // Resetting mastery points when level changes
    this.setState({
      masteryPoints: points,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
    });
  }

  // Reset all current selections
  resetSelections() {
    this.state.userSelections.morale1 = 0;
    this.state.userSelections.morale2 = 0;
    this.state.userSelections.morale3 = 0;
    this.state.userSelections.morale4 = 0;
    this.state.userSelections.tactics = [];
    this.state.userSelections.masteryAbilities = [];
    this.state.selectedAbilities = [];
    this.setState({
      userSelections: this.state.userSelections,
      selectedAbilities: this.state.selectedAbilities,
    });
  }

  // Reset career to initial state
  resetCareer() {
    this.setState({
      currentLevel: 1,
      currentRenown: 10,
      masteryPoints: 0,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
      userSelections: {
        morale1: 0,
        morale2: 0,
        morale3: 0,
        morale4: 0,
        tactics: [],
        masteryAbilities: [],
      },
      selectedAbilities: [],
      currentTacticLimit: 0,
    });
  }

  // Hide/show overlay, param is boolean
  updateOverlayVisibility(status) {
    this.state.overlay.visible = status;
    this.setState({ 
      overlay: this.state.overlay,
    });
  }

  hideOverlay() {
    this.updateModalVisibility(false);
    this.updateSidebarVisibility(false);
    this.state.overlay.visible = false;
    this.setState({ 
      overlay: this.state.overlay,
    });
  }

  // Update contents of modal, param is new copy
  updateModalContent(title, content) {
    this.state.modal.contentTitle = title;
    this.state.modal.contentBody = content;
    this.setState({ 
      modal: this.state.modal,
    });
  }

  // Hide/show modal, param is boolean
  updateModalVisibility(status) {
    this.state.modal.visible = status;
    this.setState({ 
      modal: this.state.modal,
    });
  }

  // Hide/show sidebar, param is boolean
  updateSidebarVisibility(status) {
    this.state.sidebar.visible = status;
    this.setState({ 
      sidebar: this.state.sidebar,
    });
  }

  updateMasteryPoints(points) {
    this.setState({ masteryPoints: points });
  }

  incrementMasteryPoints() {
    this.setState({ masteryPoints: this.state.masteryPoints + 1 });
  }

  decrementMasteryPoints() {
    this.setState({ masteryPoints: this.state.masteryPoints - 1 });
  }

  incrementPathMeter(path) {
    const pathProperty = this.formatPathMeter(path);
    // i.e. pathAMeter: this.state.pathAMeter + 1
    this.setState({ [pathProperty]: this.state[pathProperty] + 1 });
  }

  decrementPathMeter(path) {
    const pathProperty = this.formatPathMeter(path);
    // i.e. pathAMeter: this.state.pathAMeter - 1
    this.setState({ [pathProperty]: this.state[pathProperty] - 1 });
  }

  // Formats path letter to path property name e.g 'a' becomes 'pathAMeter'
  formatPathMeter(path) {
    const pathFormatted = path.toUpperCase();
    return `path${pathFormatted}Meter`;
  }

  updateLevel(level) {
    this.setState({ currentLevel: Number(level) });
  }

  updateRenown(renown) {
    this.setState({ currentRenown: Number(renown) });
  }

  render() {
    const containerClass = classNames({
      'o-wrapper': true,
      sidebar: this.state.sidebar.visible,
    });
    if (Object.keys(this.state.career).length) {
      return (
        <div className="u-height">
          <div className={containerClass}>
            <div className="c-box c-box--inverse">
              
              <Breadcrumb 
                career={this.state.career}
                updateSidebarVisibility={this.updateSidebarVisibility}
                updateOverlayVisibility={this.updateOverlayVisibility}
              />

              <BarXp currentLevel={this.state.currentLevel} />

              <BarRenown currentRenown={this.state.currentRenown} currentLevel={this.state.currentLevel} />

              <div className="pure-g">
                <div className="pure-u-1 pure-u-sm-7-12 pure-u-md-5-12 pure-u-lg-8-24">

                  <CareerTitle careerShort={this.state.careerShort}
                    career={this.state.career}
                  />

                </div>
                <div className="pure-u-1-3 pure-u-mobile-1-2 pure-u-sm-1-6 pure-u-md-1-6 pure-u-lg-3-24">

                  <SelectLevel
                    updateLevel={this.updateLevel}
                    currentLevel={this.state.currentLevel}
                    setMasteryPoints={this.setMasteryPoints}
                    currentRenown={this.state.currentRenown}
                    setCurrentTacticLimit={this.setCurrentTacticLimit}
                    resetSelections={this.resetSelections}
                  />

                </div>
                <div className="pure-u-2-3 pure-u-mobile-1-2 pure-u-sm-1-4 pure-u-md-5-12 pure-u-lg-13-24">

                  <SelectRenown
                    currentLevel={this.state.currentLevel}
                    currentRenown={this.state.currentRenown}
                    updateRenown={this.updateRenown}
                    setMasteryPoints={this.setMasteryPoints}
                    resetSelections={this.resetSelections}
                  />

                </div>
              </div>

              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-10-24">

                  <CoreAbilities 
                    currentLevel={this.state.currentLevel} 
                    coreAbilities={this.state.coreAbilities}
                    abilities={this.state.abilities}
                    setSelectedAbilities={this.setSelectedAbilities}
                    selectedAbilities={this.state.selectedAbilities}
                  />

                  <CoreMorales 
                    currentLevel={this.state.currentLevel}
                    abilities={this.state.abilities}
                    morales={this.state.coreMorales}
                    setUserSelectionMorale={this.setUserSelectionMorale}
                    userSelections={this.state.userSelections}
                    setSelectedAbilities={this.setSelectedAbilities}
                    selectedAbilities={this.state.selectedAbilities}
                    incrementMasteryPoints={this.incrementMasteryPoints}
                  />

                  <CoreTactics currentLevel={this.state.currentLevel}
                    tactics={this.state.coreTactics}
                    setSelectedAbilities={this.setSelectedAbilities}
                    selectedAbilities={this.state.selectedAbilities}
                    currentTacticLimit={this.state.currentTacticLimit}
                    setUserSelectionTactic={this.setUserSelectionTactic}
                    userSelections={this.state.userSelections}
                  />

                </div>
                <div className="pure-u-1 pure-u-md-14-24">

                  <Mastery
                    career={this.state.career}
                    currentLevel={this.state.currentLevel}
                    pathACoreAbilities={this.state.pathACoreAbilities}
                    pathACoreOverflow={this.state.pathACoreOverflow}
                    pathAOptionalAbilities={this.state.pathAOptionalAbilities}
                    pathBCoreAbilities={this.state.pathBCoreAbilities}
                    pathBCoreOverflow={this.state.pathBCoreOverflow}
                    pathBOptionalAbilities={this.state.pathBOptionalAbilities}
                    pathCCoreAbilities={this.state.pathCCoreAbilities}
                    pathCCoreOverflow={this.state.pathCCoreOverflow}
                    pathCOptionalAbilities={this.state.pathCOptionalAbilities}
                    masteryPoints={this.state.masteryPoints}
                    pathAMeter={this.state.pathAMeter}
                    pathBMeter={this.state.pathBMeter}
                    pathCMeter={this.state.pathCMeter}
                    updateMasteryPoints={this.updateMasteryPoints}
                    setUserSelectionMorale={this.setUserSelectionMorale}
                    userSelections={this.state.userSelections}
                    setSelectedAbilities={this.setSelectedAbilities}
                    selectedAbilities={this.state.selectedAbilities}
                    currentTacticLimit={this.state.currentTacticLimit}
                    setUserSelectionTactic={this.setUserSelectionTactic}
                    setUserSelectionMasteryAbilities={this.setUserSelectionMasteryAbilities}
                    incrementMasteryPoints={this.incrementMasteryPoints}
                    decrementMasteryPoints={this.decrementMasteryPoints}
                    incrementPathMeter={this.incrementPathMeter}
                    decrementPathMeter={this.decrementPathMeter}
                  />

                  <ActionButtons
                    resetCareer={this.resetCareer}
                    careerShort={this.state.careerShort}
                    currentLevel={this.state.currentLevel}
                    currentRenown={this.state.currentRenown}
                    currentTacticLimit={this.state.currentTacticLimit}
                    masteryPoints={this.state.masteryPoints}
                    pathAMeter={this.state.pathAMeter}
                    pathBMeter={this.state.pathBMeter}
                    pathCMeter={this.state.pathCMeter}
                    morale1={this.state.userSelections.morale1}
                    morale2={this.state.userSelections.morale2}
                    morale3={this.state.userSelections.morale3}
                    morale4={this.state.userSelections.morale4}
                    selectedAbilities={this.state.selectedAbilities}
                    masteryAbilities={this.state.userSelections.masteryAbilities}
                    tactics={this.state.userSelections.tactics}
                    updateModalVisibility={this.updateModalVisibility}
                    updateModalContent={this.updateModalContent}
                    career={this.state.career}
                    updateSidebarVisibility={this.updateSidebarVisibility}
                    updateOverlayVisibility={this.updateOverlayVisibility}
                    gaCareerSaved={this.gaCareerSaved}
                  />

                </div>
              </div>

              <Modal
                modal={this.state.modal}
                updateModalVisibility={this.updateModalVisibility}
                updateOverlayVisibility={this.updateOverlayVisibility}
              />

            </div>
          </div>

          <Overlay
            overlay={this.state.overlay}
            hideOverlay={this.hideOverlay}
            visible
          />

          <Sidebar
            careers={this.state.careers}
            updateSidebarVisibility={this.updateSidebarVisibility}
            updateOverlayVisibility={this.updateOverlayVisibility}
            sidebar={this.state.sidebar}
          />

        </div>
      );
    }
    return (
      <div className="o-row o-row--centred">
        <h1><i className="fa fa-cog fa-spin fa-fw margin-bottom"></i>Loading...</h1>
      </div>
    );
  }

  /* 
  * ---
  * Google Analytics Events
  * ---
  */

  // Create category/value to determine where race was selected from i.e. home, button, breadcrumb
  // Again, needs to be duplicated on home page
  gaChangeCareer() {
    // Change career, breadcrumb/home/footer
  }

  // Google Analytics event after selecting career
  // TODO: this method needs to be duplicated on home page I guess
  gaCareerSelected() {
    // category, action, label, value
    // Career selected,  <career name>, ,
    // Class selected,  <class name>, ,
    // Race selected,  <race name>, ,
  }

  // Google Analytics event after saving career
  gaCareerSaved() {
    // Other events to send:
    // category, action, label, value
    // <career name>, Morale 3,  <morale name>, <morale id> -  Can be core or mastery (for M4)
    // <career name>, Tactic,  <tactic name>, <ability id> -  Can be core or masteryPoints
    // <career name>, Mastery ability, <ability name>,  <ability id>  
    // <career name>, Path A,  <path name>, Points spent in path - Only send if points > 0
    h.gaEvent('Career saved', this.state.career.name, this.state.career.class, this.state.currentLevel);
    if (Number(this.state.userSelections.morale1) > 0) {
      h.gaEvent(this.state.career.name, 'Morale 1', 'morale name', 666);  
    }    
  }
}

Career.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Career;
