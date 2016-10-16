import React from 'react';
import h from '../helpers';
import Loading from './Loading';
import CareerRender from './CareerRender';
import classNames from 'classnames';
import css from '../../css/components/Career.css';

class Career extends React.Component {

  constructor(props) {
    super(props);

    this.loadCareer = this.loadCareer.bind(this);
    this.updateCareerLoading = this.updateCareerLoading.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.updateRenown = this.updateRenown.bind(this);
    this.resetSelections = this.resetSelections.bind(this);
    this.resetCareer = this.resetCareer.bind(this);
    this.updateMasteryPoints = this.updateMasteryPoints.bind(this);
    this.updateCurrentTacticLimit = this.updateCurrentTacticLimit.bind(this);
    this.updateSelectedMorale = this.updateSelectedMorale.bind(this);
    this.updateSelectedTactics = this.updateSelectedTactics.bind(this);
    this.incrementMasteryPoints = this.incrementMasteryPoints.bind(this);
    this.decrementMasteryPoints = this.decrementMasteryPoints.bind(this);
    this.updateCoreTactics = this.updateCoreTactics.bind(this);
    this.updateCoreMorales = this.updateCoreMorales.bind(this);
    this.incrementPathMeter = this.incrementPathMeter.bind(this);
    this.decrementPathMeter = this.decrementPathMeter.bind(this);
    this.updateSelectedMasteries = this.updateSelectedMasteries.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      careerLoading: true,
      career: {},
      careerSlug: '',
      abilities: {},
      coreAbilities: [],
      coreMorales: [],
      coreTactics: [],
      pathACoreAbilities: [],
      pathACoreOverflow: [],
      pathAOptionalAbilities: {},
      pathBCoreAbilities: [],
      pathBCoreOverflow: [],
      pathBOptionalAbilities: {},
      pathCCoreAbilities: [],
      pathCCoreOverflow: [],
      pathCOptionalAbilities: {},
      currentLevel: 1,
      currentRenown: 10,
      masteryPoints: 0,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
      currentTacticLimit: 0,
      selectedMasteries: [],
      selectedTactics: [],
      selectedMorale1: 0,
      selectedMorale2: 0,
      selectedMorale3: 0,
      selectedMorale4: 0,
    };
  }

  componentWillMount() {
    console.warn("Career componentWillMount");
  }

  componentDidMount() {
    console.warn("Career componentDidMount");
    console.log("props:", this.props);
    // Load initial career data when component mounts
    // this.props.careers will be empty when coming to career URL directly initially, so we need to check
    if (Object.keys(this.props.careers).length > 0) {
      // Check if it's a valid career name
      if (this.props.careers.hasOwnProperty(this.props.params.careerName)) {
          this.loadCareer(this.props.params.careerName, this.props.careers[this.props.params.careerName]);
      } else {
        // TODO redirect to not found page on else here
        console.warn("CAREER DOES NOT EXIST!")
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.warn("Career componentWillReceiveProps");
    console.log("props", this.props);
    console.log("nextProps", nextProps);
    // If loading career page URL directly we will have to load career as this.props.careers won't be populated until this event
    // Or
    // If new career selected from Sidebar load new career data
    if ((Object.keys(this.state.career).length === 0) || (this.props.params.careerName != nextProps.params.careerName)) {
      // Check if it's a valid career name
      if (nextProps.careers.hasOwnProperty(nextProps.params.careerName)) {
          this.loadCareer(nextProps.params.careerName, nextProps.careers[nextProps.params.careerName]);
      } else {
          // TODO redirect to not found page on else here
          console.warn("CAREER DOES NOT EXIST!")
      }
    }
  }

  // Load career details into state
  loadCareer(careerName, career) {
    console.log("I am trying to load a career with name = ", careerName);
    // Reset current state
    this.resetSelections();
    this.resetCareer();
    // Set loading animation
    this.updateCareerLoading(true);
    this.state.career = career;
    this.state.careerSlug = careerName;
    const pathAbilities = `/json/abilities/${this.state.career.code}.json`;
    h.getJSON(pathAbilities, (abilities) => {
      const imported = h.importJSON(this.state.career, abilities);
      if (Object.keys(imported.abilities).length) {
        this.setState({
          careerLoading: false,
          career: this.state.career,
          careerSlug: this.state.careerSlug,
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
        // Reset Sidebar and Overlay
        this.props.updateSidebarVisibility(false);
        this.props.updateOverlayVisibility(false);
        console.warn("New career loaded. Career is ", this.state.careerSlug);
        // Check if this is a saved Career URL and update State accordingly
        if (this.props.params.careerSaved === 's') {
          const { query } = this.props.location;
          this.setSavedCareer(query);
        }
      }
    }, (error) => {
      console.warn(error);
    });
  }

  // Set state from query params if first path part is /s
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

  // Hide/show career loading screen
  updateCareerLoading(status) {
    this.state.careerLoading = status;
    this.setState({
      careerLoading: this.state.careerLoading,
    });
  }



  // Set career level
  updateLevel(level) {
    this.state.currentLevel = Number(level);
    this.setState({
      currentLevel: this.state.currentLevel,
    });
  }

  // Set renown level
  updateRenown(level) {
    this.state.currentRenown = Number(level);
    this.setState({
      currentRenown: this.state.currentRenown,
    });
  }

  // Reset career values
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

  // Calculate mastery points available based on char level and renown level
  calculateMasteryPoints() {
    const level = this.state.currentLevel;
    const renown = this.state.currentRenown;
    let points = 0;
    if (level > 10) {
      if (level > 20) {
        points = level - 15;
      } else {
        if (level > 18) {
          points = 5;
        } else if (level > 16) {
          points = 4;
        } else if (level > 14) {
          points = 3;
        } else if (level > 12) {
          points = 2;
        } else {
          points = 1;
        }
      }
      switch (renown) {
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
    // return mastery points
    return points;
  }

  // Set mastery points and reset path values
  updateMasteryPoints() {
    this.state.masteryPoints = Number(this.calculateMasteryPoints());
    this.setState({
      masteryPoints: this.state.masteryPoints,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
    });
  }

  incrementMasteryPoints() {
    this.state.masteryPoints = Number(this.state.masteryPoints) + 1;
    this.setState({
      masteryPoints: this.state.masteryPoints
    });
  }

  decrementMasteryPoints() {
    this.state.masteryPoints = Number(this.state.masteryPoints) - 1;
    this.setState({
      masteryPoints: this.state.masteryPoints
    });
  }

  // Amends this.state.selectedMasteries
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

  // Calculate tactic limit based on char level
  calculateCurrentTacticLimit() {
    const level = this.state.currentLevel;
    let currentLimit = 0;
    if (level === 40) {
      currentLimit = 4;
    } else if (level >= 30) {
      currentLimit = 3;
    } else if (level >= 20) {
      currentLimit = 2;
    } else if (level >= 10) {
      currentLimit = 1;
    }
    // return limit
    return currentLimit;
  }

  // Set tactic selection limit
  updateCurrentTacticLimit() {
    this.state.currentTacticLimit = Number(this.calculateCurrentTacticLimit());
    this.setState({
      currentTacticLimit: this.state.currentTacticLimit,
    });
  }

  // Amends this.state.selectedMoraleX. Optional boolean to remove only
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

  // Amends core tactics with selections from mastery
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

  // Amends core morales with selections from mastery
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

  // Formats path letter to path property name e.g 'a' becomes 'pathAMeter'
  formatPathMeter(path) {
    const pathFormatted = path.toUpperCase();
    return `path${pathFormatted}Meter`;
  }

  incrementPathMeter(path) {
    const pathProperty = this.formatPathMeter(path);
    // i.e. pathAMeter: this.state.pathAMeter + 1
    this.setState({
      [pathProperty]: this.state[pathProperty] + 1,
    });
  }

  decrementPathMeter(path) {
    const pathProperty = this.formatPathMeter(path);
    // i.e. pathAMeter: this.state.pathAMeter - 1
    this.setState({
      [pathProperty]: this.state[pathProperty] - 1
    });
  }

  renderContent() {
    if (this.state.careerLoading) {
      return (

        <div className={css.loadingContainer}>
          <Loading sidebar={this.props.sidebar} />
        </div>

      );
    } else {
      
      return (

        <CareerRender
          career={this.state.career}
          updateSidebarVisibility={this.props.updateSidebarVisibility}
          updateOverlayVisibility={this.props.updateOverlayVisibility}
          gaChangeCareer={this.props.gaChangeCareer}
          currentLevel={this.state.currentLevel}
          currentRenown={this.state.currentRenown}
          careerSlug={this.state.careerSlug}
          updateLevel={this.updateLevel}
          updateRenown={this.updateRenown}
          updateMasteryPoints={this.updateMasteryPoints}
          updateCurrentTacticLimit={this.updateCurrentTacticLimit}
          resetSelections={this.resetSelections}
          coreAbilities={this.state.coreAbilities}
          abilities={this.state.abilities}
          coreMorales={this.state.coreMorales}
          selectedMorale1={this.state.selectedMorale1}
          selectedMorale2={this.state.selectedMorale2}
          selectedMorale3={this.state.selectedMorale3}
          selectedMorale4={this.state.selectedMorale4}
          updateSelectedMorale={this.updateSelectedMorale}
          coreTactics={this.state.coreTactics}
          currentTacticLimit={this.state.currentTacticLimit}
          selectedTactics={this.state.selectedTactics}
          updateSelectedTactics={this.updateSelectedTactics}
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
          incrementMasteryPoints={this.incrementMasteryPoints}
          decrementMasteryPoints={this.decrementMasteryPoints}
          incrementPathMeter={this.incrementPathMeter}
          decrementPathMeter={this.decrementPathMeter}
          selectedMasteries={this.state.selectedMasteries}
          updateSelectedMasteries={this.updateSelectedMasteries}
          resetCareer={this.resetCareer}
          updateModalVisibility={this.props.updateModalVisibility}
          updateModalContent={this.props.updateModalContent}
          updateCoreTactics={this.updateCoreTactics}
          updateCoreMorales={this.updateCoreMorales}
          gaChangeCareer={this.props.gaChangeCareer}
        />

      );
    }
  }

  render() {
    console.warn("Career render");
    const containerClass = classNames({
      [css.wrapper]: !this.props.sidebar.visible,
      [css.wrapperSidebar]: this.props.sidebar.visible,
    });
    return (
      <div className={containerClass}>
        {this.renderContent()}
      </div>
    );
  }
}

Career.propTypes = {
  careers: React.PropTypes.object,
  sidebar: React.PropTypes.object,
  updateSidebarVisibility: React.PropTypes.func,
  updateOverlayVisibility: React.PropTypes.func,
  gaChangeCareer: React.PropTypes.func,
  gaCareerSelected: React.PropTypes.func,
  clickOverlay: React.PropTypes.func,
  updateModalVisibility: React.PropTypes.func,
  updateModalContent: React.PropTypes.func,
};

export default Career;
