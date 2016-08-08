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
    this.updateMasteryPoints = this.updateMasteryPoints.bind(this);
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
    this.gaCareerShared = this.gaCareerShared.bind(this);
    this.gaCareerSelected = this.gaCareerSelected.bind(this);
    this.gaChangeCareer = this.gaChangeCareer.bind(this);
    this.updateSelectedTactics = this.updateSelectedTactics.bind(this);
    this.updateSelectedMasteries = this.updateSelectedMasteries.bind(this);
    this.updateSelectedMorale = this.updateSelectedMorale.bind(this);
    this.updateCoreTactics = this.updateCoreTactics.bind(this);
    this.updateCoreMorales = this.updateCoreMorales.bind(this);

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
      selectedMasteries: [],
      selectedTactics: [],
      selectedMorale1: 0,
      selectedMorale2: 0,
      selectedMorale3: 0,
      selectedMorale4: 0,
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
          // Check if this is a saved Career URL and update State accordingly
          if (this.props.params.careerSaved === 's') {
            const { query } = this.props.location;
            this.setSavedCareer(query);
          }
        });
      } else {
        this.setState({
          careers,
        });
      }
    }, (error) => {
      console.warn(error);
    });
  }

  // Amends this.state.selectedTactics. Optional boolean to remove only
  updateSelectedTactics(abilityId, addAbility = true) {
    const abilityIndex = this.state.selectedTactics.indexOf(abilityId);
    if (abilityIndex === -1) {
      if (addAbility) {
        // If ability isn't in array then add it
        this.state.selectedTactics.push(abilityId);
      }
    } else {
      // remove it from array
      this.state.selectedTactics.splice(abilityIndex, 1);
    }
    this.setState({
      selectedTactics: this.state.selectedTactics,
    });
  }

  updateSelectedMasteries(abilityId) {
    const abilityIndex = this.state.selectedMasteries.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.selectedMasteries.push(abilityId);
    } else {
      // remove it from array
      this.state.selectedMasteries.splice(abilityIndex, 1);
    }
    this.setState({
      selectedMasteries: this.state.selectedMasteries,
    });
  }

  // Amends this.state.selectedMorale. Optional boolean to remove only
  updateSelectedMorale(rank, tacticId, addAbility = true) {
    const moraleId = this.state[`selectedMorale${rank}`];
    if (Number(moraleId) === Number(tacticId)) {
      // If ability isn't is current morale then reset it
      this.state[`selectedMorale${rank}`] = 0;
    } else {
      // add it as current morale
      if (addAbility) {
        this.state[`selectedMorale${rank}`] = tacticId;
      }
    }
    this.setState({
      [`selectedMorale${rank}`]: this.state[`selectedMorale${rank}`],
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
    if (query.ma) {
      query.ma.split(',').forEach((abilityId) => {
        this.state.selectedMasteries.push(Number(abilityId));
        // If mastery tactic or morale activated, it must be added to coreTactics/coreMorales
        if (this.state.abilities[abilityId].abilityType === 'tactic') {
          this.updateCoreTactics(Number(abilityId));
        }
        if (this.state.abilities[abilityId].abilityType === 'morale') {
          this.updateCoreMorales(Number(abilityId));
        }
      });
    }
    if (query.m1) {
      this.state.selectedMorale1 = Number(query.m1);
    }
    if (query.m2) {
      this.state.selectedMorale2 = Number(query.m2);
    }
    if (query.m3) {
      this.state.selectedMorale3 = Number(query.m3);
    }
    if (query.m4) {
      this.state.selectedMorale4 = Number(query.m4);
    }
    if (query.t) {
      query.t.split(',').forEach((abilityId) => {
        this.state.selectedTactics.push(Number(abilityId));
      });
    }
    this.setState({
      selectedMasteries: this.state.selectedMasteries,
      selectedTactics: this.state.selectedTactics,
      selectedMorale1: this.state.selectedMorale1,
      selectedMorale2: this.state.selectedMorale2,
      selectedMorale3: this.state.selectedMorale3,
      selectedMorale4: this.state.selectedMorale4,
    });
  }

  updateCoreTactics(abilityId) {
    const abilityIndex = this.state.coreTactics.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.coreTactics.push(abilityId);
    } else {
      // remove it from array
      this.state.coreTactics.splice(abilityIndex, 1);
    }
    this.setState({
      coreTactics: this.state.coreTactics,
    });
  }

  updateCoreMorales(abilityId) {
    const abilityIndex = this.state.coreMorales.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.coreMorales.push(abilityId);
    } else {
      // remove it from array
      this.state.coreMorales.splice(abilityIndex, 1);
    }
    this.setState({
      coreMorales: this.state.coreMorales,
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
    this.state.selectedMorale1 = 0;
    this.state.selectedMorale2 = 0;
    this.state.selectedMorale3 = 0;
    this.state.selectedMorale4 = 0;
    this.state.selectedMasteries = [];
    this.state.selectedTactics = [];
    this.setState({
      selectedMorale1: this.state.selectedMorale1,
      selectedMorale2: this.state.selectedMorale2,
      selectedMorale3: this.state.selectedMorale3,
      selectedMorale4: this.state.selectedMorale4,
      selectedMasteries: this.state.selectedMasteries,
      selectedTactics: this.state.selectedTactics,
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
      currentTacticLimit: 0,
      selectedTactics: [],
      selectedMasteries: [],
      selectedMorale1: 0,
      selectedMorale2: 0,
      selectedMorale3: 0,
      selectedMorale4: 0,
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

            <Breadcrumb
              career={this.state.career}
              updateSidebarVisibility={this.updateSidebarVisibility}
              updateOverlayVisibility={this.updateOverlayVisibility}
              gaChangeCareer={this.gaChangeCareer}
            />

            <BarXp currentLevel={this.state.currentLevel} />

            <BarRenown currentRenown={this.state.currentRenown} currentLevel={this.state.currentLevel} />

            <div className="pure-g">
              <div className="pure-u-1 pure-u-sm-7-12 pure-u-md-10-24">

                <CareerTitle careerShort={this.state.careerShort}
                  career={this.state.career}
                />

              </div>
              <div className="pure-u-1-3 pure-u-mobile-1-2 pure-u-sm-1-6 pure-u-md-1-6">

                <SelectLevel
                  updateLevel={this.updateLevel}
                  currentLevel={this.state.currentLevel}
                  setMasteryPoints={this.setMasteryPoints}
                  currentRenown={this.state.currentRenown}
                  setCurrentTacticLimit={this.setCurrentTacticLimit}
                  resetSelections={this.resetSelections}
                />

              </div>
              <div className="pure-u-2-3 pure-u-mobile-1-2 pure-u-sm-1-4 pure-u-md-10-24">

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
                />

                <CoreMorales
                  currentLevel={this.state.currentLevel}
                  abilities={this.state.abilities}
                  morales={this.state.coreMorales}
                  selectedMorale1={this.state.selectedMorale1}
                  selectedMorale2={this.state.selectedMorale2}
                  selectedMorale3={this.state.selectedMorale3}
                  selectedMorale4={this.state.selectedMorale4}
                  updateSelectedMorale={this.updateSelectedMorale}
                />

                <CoreTactics
                  currentLevel={this.state.currentLevel}
                  abilities={this.state.abilities}
                  tactics={this.state.coreTactics}
                  currentTacticLimit={this.state.currentTacticLimit}
                  selectedTactics={this.state.selectedTactics}
                  updateSelectedTactics={this.updateSelectedTactics}
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
                  incrementMasteryPoints={this.incrementMasteryPoints}
                  decrementMasteryPoints={this.decrementMasteryPoints}
                  incrementPathMeter={this.incrementPathMeter}
                  decrementPathMeter={this.decrementPathMeter}
                  abilities={this.state.abilities}
                  selectedMasteries={this.state.selectedMasteries}
                  updateSelectedMasteries={this.updateSelectedMasteries}
                  updateSelectedTactics={this.updateSelectedTactics}
                  updateSelectedMorale={this.updateSelectedMorale}
                  updateCoreTactics={this.updateCoreTactics}
                  updateCoreMorales={this.updateCoreMorales}
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
                  selectedMorale1={this.state.selectedMorale1}
                  selectedMorale2={this.state.selectedMorale2}
                  selectedMorale3={this.state.selectedMorale3}
                  selectedMorale4={this.state.selectedMorale4}
                  selectedMasteries={this.state.selectedMasteries}
                  selectedTactics={this.state.selectedTactics}
                  updateModalVisibility={this.updateModalVisibility}
                  updateModalContent={this.updateModalContent}
                  career={this.state.career}
                  updateSidebarVisibility={this.updateSidebarVisibility}
                  updateOverlayVisibility={this.updateOverlayVisibility}
                  gaCareerShared={this.gaCareerShared}
                  gaChangeCareer={this.gaChangeCareer}
                />

              </div>
            </div>

            <Modal
              modal={this.state.modal}
              updateModalVisibility={this.updateModalVisibility}
              updateOverlayVisibility={this.updateOverlayVisibility}
            />
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
            gaCareerSelected={this.gaCareerSelected}
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
  * -----------------------
  * Google Analytics Events
  * -----------------------
  */

  // Create category/value to determine where race was selected from i.e. home, button, breadcrumb
  // Again, needs to be duplicated on home page
  gaChangeCareer(changeType) {
    h.gaEvent('Career changed', changeType);
  }

  // Google Analytics event after selecting career
  gaCareerSelected(careerKey) {
    h.gaEvent('Career selected', this.state.careers[careerKey].name);
    h.gaEvent('Class selected', this.state.careers[careerKey].class);
    h.gaEvent('Race selected', this.state.careers[careerKey].race);
  }

  // Google Analytics events after saving career
  gaCareerShared() {
    h.gaEvent('Career shared', this.state.career.name, this.state.career.class, this.state.currentLevel);
    if (Number(this.state.selectedMorale1) > 0) {
      h.gaEvent(this.state.career.name, 'Selected Morale 1', this.state.abilities[this.state.selectedMorale1].name, this.state.selectedMorale1);
    }
    if (Number(this.state.selectedMorale2) > 0) {
      h.gaEvent(this.state.career.name, 'Selected Morale 2', this.state.abilities[this.state.selectedMorale2].name, this.state.selectedMorale2);
    }
    if (Number(this.state.selectedMorale3) > 0) {
      h.gaEvent(this.state.career.name, 'Selected Morale 3', this.state.abilities[this.state.selectedMorale3].name, this.state.selectedMorale3);
    }
    if (Number(this.state.selectedMorale4) > 0) {
      h.gaEvent(this.state.career.name, 'Selected Morale 4', this.state.abilities[this.state.selectedMorale4].name, this.state.selectedMorale4);
    }
    if (Number(this.state.selectedTactics.length) > 0) {
      for (const abilityId of this.state.selectedTactics) {
        h.gaEvent(this.state.career.name, 'Selected Tactic', this.state.abilities[abilityId].name, abilityId);
      }
    }
    if (Number(this.state.selectedMasteries.length) > 0) {
      for (const abilityId of this.state.selectedMasteries) {
        h.gaEvent(this.state.career.name, 'Mastery ability', this.state.abilities[abilityId].name, abilityId);
      }
    }
  }
}

Career.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Career;
