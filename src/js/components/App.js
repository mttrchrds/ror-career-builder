import React from 'react';
import h from '../helpers';
import css from '../../css/components/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

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

  componentDidMount() {
    this.loadCareers();
  }

  componentWillReceiveProps(nextProps) {

  }

  // Load careers into state
  loadCareers() {
    h.getJSON('/json/careers.json', (result) => {
      this.setState({
        careers: result,
      });
    });
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
    // Common props for all children components
    let childProps = {
      careers: this.state.careers,
    };
    return React.Children.map(props.children, (child) => {
      // Specific props for components
      switch (child.type.name) {
        case 'Home':
          childProps['only-for-home'] = true;
          break;
        case 'Career':
          childProps['only-for-career'] = true;
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
