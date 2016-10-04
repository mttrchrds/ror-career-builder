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
  loadCareer(careerName) {
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
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
