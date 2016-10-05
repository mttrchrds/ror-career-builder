import React from 'react';
import h from '../helpers';
import css from '../../css/components/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    // Bind functions early
    this.clickOverlay = this.clickOverlay.bind(this);
    this.updateModalVisibility = this.updateModalVisibility.bind(this);
    this.updateSidebarVisibility = this.updateSidebarVisibility.bind(this);
    this.updateOverlayVisibility = this.updateOverlayVisibility.bind(this);
    this.gaChangeCareer = this.gaChangeCareer.bind(this);
    this.gaCareerSelected = this.gaCareerSelected.bind(this);
    this.gaCareerShared = this.gaCareerShared.bind(this);
    this.loadCareer = this.loadCareer.bind(this);
    this.updateCareerLoading = this.updateCareerLoading.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.updateRenown = this.updateRenown.bind(this);
    this.resetSelections = this.resetSelections.bind(this);
    this.updateMasteryPoints = this.updateMasteryPoints.bind(this);
    this.updateCurrentTacticLimit = this.updateCurrentTacticLimit.bind(this);
    this.updateSelectedMorale = this.updateSelectedMorale.bind(this);
    this.updateSelectedTactics = this.updateSelectedTactics.bind(this);

    // Initialise state of app
    this.state = {
      careers: {},
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

  // TODO: refactor this from Careers
  componentWillReceiveProps() {
    // New career selected, reset selections and load data
    // this.resetCareer();
    // this.loadCareer();
    // this.hideOverlay();
  }

  componentDidMount() {
    // Load careers into state from json
    this.loadCareers();
  }

  // Load careers into state
  loadCareers() {
    h.getJSON('/json/careers.json', (result) => {
      this.setState({
        careers: result,
      });
    }, (error) => {
      console.warn(error);
    });
  }

  // Load career details into state
  loadCareer() {
    const careerName = this.props.params.careerName;
    // TODO: a more elegant way to display that the career was not found, rather than an endless loading animation
    this.updateCareerLoading(true);
    if (this.state.careers[careerName]) {
      this.state.career = this.state.careers[careerName];
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
          // TODO: below for saved careers
          // Check if this is a saved Career URL and update State accordingly
          if (this.props.params.careerSaved === 's') {
            // const { query } = this.props.location;
            // this.setSavedCareer(query);
          }
        }
      }, (error) => {
        console.warn(error);
      });
    }
  }

  // Hide/show career loading screen
  updateCareerLoading(status) {
    this.state.careerLoading = status;
    this.setState({
      careerLoading: this.state.careerLoading,
    });
  }

  // Hide/show Modal, param is boolean
  updateModalVisibility(status) {
    this.state.modal.visible = status;
    this.setState({
      modal: this.state.modal,
    });
  }

  // Hide/show Sidebar, param is boolean
  updateSidebarVisibility(status) {
    this.state.sidebar.visible = status;
    this.setState({
      sidebar: this.state.sidebar,
    });
  }

  // Hide/show Overlay, param is boolean
  updateOverlayVisibility(status) {
    this.state.overlay.visible = status;
    this.setState({
      overlay: this.state.overlay,
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

  // Overlay background is clicked
  clickOverlay() {
    this.updateModalVisibility(false);
    this.updateSidebarVisibility(false);
    this.updateOverlayVisibility(false);
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

  renderChildren(props) {
    // Common props for all child components
    let childProps = {
      careers: this.state.careers,
      overlay: this.state.overlay,
      sidebar: this.state.sidebar,
      modal: this.state.modal,
      updateModalVisibility: this.updateModalVisibility,
      updateSidebarVisibility: this.updateSidebarVisibility,
      updateOverlayVisibility: this.updateOverlayVisibility,
      clickOverlay: this.clickOverlay,
      gaChangeCareer: this.gaChangeCareer,
      gaCareerSelected: this.gaCareerSelected,
      gaCareerShared: this.gaCareerShared,
    };
    return React.Children.map(props.children, (child) => {
      // Specific props for components
      switch (child.type.name) {
        case 'Career':
          childProps.loadCareer = this.loadCareer;
          childProps.careerLoading = this.state.careerLoading;
          childProps.career = this.state.career;
          childProps.careerSlug = this.state.careerSlug;
          childProps.abilities = this.state.abilities;
          childProps.coreAbilities = this.state.coreAbilities;
          childProps.coreMorales = this.state.coreMorales;
          childProps.coreTactics = this.state.coreTactics;
          childProps.pathACoreAbilities = this.state.pathACoreAbilities;
          childProps.pathACoreOverflow = this.state.pathACoreOverflow;
          childProps.pathAOptionalAbilities = this.state.pathAOptionalAbilities;
          childProps.pathBCoreAbilities = this.state.pathBCoreAbilities;
          childProps.pathBCoreOverflow = this.state.pathBCoreOverflow;
          childProps.pathBOptionalAbilities = this.state.pathBOptionalAbilities;
          childProps.pathCCoreAbilities = this.state.pathCCoreAbilities;
          childProps.pathCCoreOverflow = this.state.pathCCoreOverflow;
          childProps.pathCOptionalAbilities = this.state.pathCOptionalAbilities;
          childProps.currentLevel = this.state.currentLevel;
          childProps.currentRenown = this.state.currentRenown;
          childProps.updateLevel = this.updateLevel;
          childProps.updateRenown = this.updateRenown;
          childProps.resetSelections = this.resetSelections;
          childProps.updateMasteryPoints = this.updateMasteryPoints;
          childProps.updateCurrentTacticLimit = this.updateCurrentTacticLimit;
          childProps.selectedMorale1 = this.state.selectedMorale1;
          childProps.selectedMorale2 = this.state.selectedMorale2;
          childProps.selectedMorale3 = this.state.selectedMorale3;
          childProps.selectedMorale4 = this.state.selectedMorale4;
          childProps.updateSelectedMorale = this.updateSelectedMorale;
          childProps.selectedTactics = this.state.selectedTactics;
          childProps.currentTacticLimit = this.state.currentTacticLimit;
          childProps.updateSelectedTactics = this.updateSelectedTactics;
          break;
        default:
          break;
      }
      return React.cloneElement(child, childProps);
    });
  }

  render() {
    return (
      <div className={css.container}>{this.renderChildren(this.props)}</div>
    );
  }

  // TODO: refactor this from Careers
  // // Amends this.state.selectedTactics. Optional boolean to remove only
  // updateSelectedTactics(abilityId, addAbility = true) {
  //   const abilityIndex = this.state.selectedTactics.indexOf(abilityId);
  //   if (abilityIndex === -1) {
  //     if (addAbility) {
  //       // If ability isn't in array then add it
  //       this.state.selectedTactics.push(abilityId);
  //     }
  //   } else {
  //     // remove it from array
  //     this.state.selectedTactics.splice(abilityIndex, 1);
  //   }
  //   this.setState({
  //     selectedTactics: this.state.selectedTactics,
  //   });
  // }
  //
  // updateSelectedMasteries(abilityId) {
  //   const abilityIndex = this.state.selectedMasteries.indexOf(abilityId);
  //   if (abilityIndex === -1) {
  //     // If ability isn't in array then add it
  //     this.state.selectedMasteries.push(abilityId);
  //   } else {
  //     // remove it from array
  //     this.state.selectedMasteries.splice(abilityIndex, 1);
  //   }
  //   this.setState({
  //     selectedMasteries: this.state.selectedMasteries,
  //   });
  // }
  //
  // // Amends this.state.selectedMorale. Optional boolean to remove only
  // updateSelectedMorale(rank, tacticId, addAbility = true) {
  //   const moraleId = this.state[`selectedMorale${rank}`];
  //   if (Number(moraleId) === Number(tacticId)) {
  //     // If ability isn't is current morale then reset it
  //     this.state[`selectedMorale${rank}`] = 0;
  //   } else {
  //     // add it as current morale
  //     if (addAbility) {
  //       this.state[`selectedMorale${rank}`] = tacticId;
  //     }
  //   }
  //   this.setState({
  //     [`selectedMorale${rank}`]: this.state[`selectedMorale${rank}`],
  //   });
  // }
  //
  // setSavedCareer(query) {
  //   if (query.l) {
  //     this.setState({
  //       currentLevel: Number(query.l),
  //     });
  //   }
  //   if (query.r) {
  //     this.setState({
  //       currentRenown: Number(query.r),
  //     });
  //   }
  //   if (query.tl) {
  //     this.setState({
  //       currentTacticLimit: Number(query.tl),
  //     });
  //   }
  //   if (query.mp) {
  //     this.setState({
  //       masteryPoints: Number(query.mp),
  //     });
  //   }
  //   if (query.pA) {
  //     this.setState({
  //       pathAMeter: Number(query.pA),
  //     });
  //   }
  //   if (query.pB) {
  //     this.setState({
  //       pathBMeter: Number(query.pB),
  //     });
  //   }
  //   if (query.pC) {
  //     this.setState({
  //       pathCMeter: Number(query.pC),
  //     });
  //   }
  //   if (query.ma) {
  //     query.ma.split(',').forEach((abilityId) => {
  //       this.state.selectedMasteries.push(Number(abilityId));
  //       // If mastery tactic or morale activated, it must be added to coreTactics/coreMorales
  //       if (this.state.abilities[abilityId].abilityType === 'tactic') {
  //         this.updateCoreTactics(Number(abilityId));
  //       }
  //       if (this.state.abilities[abilityId].abilityType === 'morale') {
  //         this.updateCoreMorales(Number(abilityId));
  //       }
  //     });
  //   }
  //   if (query.m1) {
  //     this.state.selectedMorale1 = Number(query.m1);
  //   }
  //   if (query.m2) {
  //     this.state.selectedMorale2 = Number(query.m2);
  //   }
  //   if (query.m3) {
  //     this.state.selectedMorale3 = Number(query.m3);
  //   }
  //   if (query.m4) {
  //     this.state.selectedMorale4 = Number(query.m4);
  //   }
  //   if (query.t) {
  //     query.t.split(',').forEach((abilityId) => {
  //       this.state.selectedTactics.push(Number(abilityId));
  //     });
  //   }
  //   this.setState({
  //     selectedMasteries: this.state.selectedMasteries,
  //     selectedTactics: this.state.selectedTactics,
  //     selectedMorale1: this.state.selectedMorale1,
  //     selectedMorale2: this.state.selectedMorale2,
  //     selectedMorale3: this.state.selectedMorale3,
  //     selectedMorale4: this.state.selectedMorale4,
  //   });
  // }
  //
  // updateCoreTactics(abilityId) {
  //   const abilityIndex = this.state.coreTactics.indexOf(abilityId);
  //   if (abilityIndex === -1) {
  //     // If ability isn't in array then add it
  //     this.state.coreTactics.push(abilityId);
  //   } else {
  //     // remove it from array
  //     this.state.coreTactics.splice(abilityIndex, 1);
  //   }
  //   this.setState({
  //     coreTactics: this.state.coreTactics,
  //   });
  // }
  //
  // updateCoreMorales(abilityId) {
  //   const abilityIndex = this.state.coreMorales.indexOf(abilityId);
  //   if (abilityIndex === -1) {
  //     // If ability isn't in array then add it
  //     this.state.coreMorales.push(abilityId);
  //   } else {
  //     // remove it from array
  //     this.state.coreMorales.splice(abilityIndex, 1);
  //   }
  //   this.setState({
  //     coreMorales: this.state.coreMorales,
  //   });
  // }
  //
  // // Update limit on number of tactic slots
  // setCurrentTacticLimit(level) {
  //   let currentLimit = 0;
  //   if (Number(level) === 40) {
  //     currentLimit = 4;
  //   } else if (Number(level) >= 30) {
  //     currentLimit = 3;
  //   } else if (Number(level) >= 20) {
  //     currentLimit = 2;
  //   } else if (Number(level) >= 10) {
  //     currentLimit = 1;
  //   }
  //   this.setState({
  //     currentTacticLimit: currentLimit,
  //   });
  // }
  //
  // // Calculate mastery points available based on char level and renown level
  // setMasteryPoints(level, renown) {
  //   let points = 0;
  //   if (Number(level) > 10) {
  //     if (Number(level) > 20) {
  //       points = level - 15;
  //     } else {
  //       if (Number(level) > 18) {
  //         points = 5;
  //       } else if (Number(level) > 16) {
  //         points = 4;
  //       } else if (Number(level) > 14) {
  //         points = 3;
  //       } else if (Number(level) > 12) {
  //         points = 2;
  //       } else {
  //         points = 1;
  //       }
  //     }
  //     switch (Number(renown)) {
  //       case 40:
  //         points = points + 1;
  //         break;
  //       case 50:
  //         points = points + 2;
  //         break;
  //       case 60:
  //         points = points + 3;
  //         break;
  //       case 70:
  //         points = points + 4;
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   // Resetting mastery points when level changes
  //   this.setState({
  //     masteryPoints: points,
  //     pathAMeter: 0,
  //     pathBMeter: 0,
  //     pathCMeter: 0,
  //   });
  // }
  //
  // // Reset all current selections
  // resetSelections() {
  //   this.state.selectedMorale1 = 0;
  //   this.state.selectedMorale2 = 0;
  //   this.state.selectedMorale3 = 0;
  //   this.state.selectedMorale4 = 0;
  //   this.state.selectedMasteries = [];
  //   this.state.selectedTactics = [];
  //   this.setState({
  //     selectedMorale1: this.state.selectedMorale1,
  //     selectedMorale2: this.state.selectedMorale2,
  //     selectedMorale3: this.state.selectedMorale3,
  //     selectedMorale4: this.state.selectedMorale4,
  //     selectedMasteries: this.state.selectedMasteries,
  //     selectedTactics: this.state.selectedTactics,
  //   });
  // }
  //
  // // Reset career to initial state
  // resetCareer() {
  //   this.setState({
  //     currentLevel: 1,
  //     currentRenown: 10,
  //     masteryPoints: 0,
  //     pathAMeter: 0,
  //     pathBMeter: 0,
  //     pathCMeter: 0,
  //     currentTacticLimit: 0,
  //     selectedTactics: [],
  //     selectedMasteries: [],
  //     selectedMorale1: 0,
  //     selectedMorale2: 0,
  //     selectedMorale3: 0,
  //     selectedMorale4: 0,
  //   });
  // }
  //
  // // Hide/show overlay, param is boolean
  // updateOverlayVisibility(status) {
  //   this.state.overlay.visible = status;
  //   this.setState({
  //     overlay: this.state.overlay,
  //   });
  // }
  //
  // hideOverlay() {
  //   this.updateModalVisibility(false);
  //   this.updateSidebarVisibility(false);
  //   this.state.overlay.visible = false;
  //   this.setState({
  //     overlay: this.state.overlay,
  //   });
  // }
  //
  // // Update contents of modal, param is new copy
  // updateModalContent(title, content) {
  //   this.state.modal.contentTitle = title;
  //   this.state.modal.contentBody = content;
  //   this.setState({
  //     modal: this.state.modal,
  //   });
  // }
  //
  // // Hide/show modal, param is boolean
  // updateModalVisibility(status) {
  //   this.state.modal.visible = status;
  //   this.setState({
  //     modal: this.state.modal,
  //   });
  // }
  //
  // // Hide/show sidebar, param is boolean
  // updateSidebarVisibility(status) {
  //   this.state.sidebar.visible = status;
  //   this.setState({
  //     sidebar: this.state.sidebar,
  //   });
  // }
  //
  // updateMasteryPoints(points) {
  //   this.setState({ masteryPoints: points });
  // }
  //
  // incrementMasteryPoints() {
  //   this.setState({ masteryPoints: this.state.masteryPoints + 1 });
  // }
  //
  // decrementMasteryPoints() {
  //   this.setState({ masteryPoints: this.state.masteryPoints - 1 });
  // }
  //
  // incrementPathMeter(path) {
  //   const pathProperty = this.formatPathMeter(path);
  //   // i.e. pathAMeter: this.state.pathAMeter + 1
  //   this.setState({ [pathProperty]: this.state[pathProperty] + 1 });
  // }
  //
  // decrementPathMeter(path) {
  //   const pathProperty = this.formatPathMeter(path);
  //   // i.e. pathAMeter: this.state.pathAMeter - 1
  //   this.setState({ [pathProperty]: this.state[pathProperty] - 1 });
  // }
  //
  // // Formats path letter to path property name e.g 'a' becomes 'pathAMeter'
  // formatPathMeter(path) {
  //   const pathFormatted = path.toUpperCase();
  //   return `path${pathFormatted}Meter`;
  // }
  //
  // updateLevel(level) {
  //   this.setState({ currentLevel: Number(level) });
  // }
  //
  // updateRenown(renown) {
  //   this.setState({ currentRenown: Number(renown) });
  // }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
