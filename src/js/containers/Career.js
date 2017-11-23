import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Career.css';
import { getAbilityType } from '../helpers/abilities';

import { fetchAbilities, resetAbilities } from '../actions/actionAbilities';
import { fetchCareers } from '../actions/actionCareers';
import { setSlug } from '../actions/actionSlug';
import { addCoreAbility } from '../actions/actionCoreAbilities';
import { addCoreTactic } from '../actions/actionCoreTactics';
import { addCoreMorale } from '../actions/actionCoreMorales';

import Sidebar from './Sidebar';
import Overlay from './Overlay';
import Breadcrumb from './Breadcrumb';
import Loading from './Loading';
import BarXp from './BarXp';
import BarRenown from './BarRenown';
import CareerTitle from './CareerTitle';
import SelectLevel from './SelectLevel';
import SelectRenown from './SelectRenown';

class Career extends Component {

  constructor(props) {
    super(props);
  }

  organiseAbilities(abilities) {

    // coreAbilities: [],
    // coreTactics: [],
    // coreMorales: [],
    // coreAbilitiesPathA: [],
    // coreAbilitiesPathAOverflow: [],
    // coreAbilitiesPathB: [],
    // coreAbilitiesPathBOverflow: [],
    // coreAbilitiesPathC: [],
    // coreAbilitiesPathCOverflow: [],
    // optionalAbiltiesPathA: [],
    // optionalAbiltiesPathB: [],
    // optionalAbiltiesPathC: [],

    const pathCoreOverflow = 6;

    for (let i = 0; i < abilities.data.length; i++) {
      let ability = abilities.data[i];
      let abilityType = ability.abilityType;
      ability.abilityType = getAbilityType(ability.category);
      if (ability.spec === 'Core Ability') {
        switch (ability.abilityType) {
          case 'standard':
            this.props.addCoreAbility(ability);
            break;
          case 'morale':
            this.props.addCoreMorale(ability);
            break;
          case 'tactic':
            this.props.addCoreTactic(ability);
            break;
          default :
            break;
        }
      }
    }

    // Object.keys(abilities).map(
    //   (ability) => {
    //     const abilityType = getAbilityType(abilities[ability]);
    //     const pathCoreOverflow = 6;
    //     abilities[ability].abilityType = abilityType;
    //     if (abilities[ability].minrank === '') abilities[ability].minrank = 1;
    //     if (abilities[ability].spec === 'Core Ability') {
    //       switch (abilityType) {
    //         case 'standard':
    //           exported.coreAbilities.push(abilities[ability].id);
    //           break;
    //         case 'morale':
    //           exported.coreMorales.push(abilities[ability].id);
    //           break;
    //         case 'tactic':
    //           exported.coreTactics.push(abilities[ability].id);
    //           break;
    //         default :
    //           break;
    //       }
    //     } else {
    //       // Check and populate Mastery path core and optional abilities
    //       if (this.arrayContains(career.paths.a.coreAbilities, abilities[ability].id)) {
    //         if (exported.pathACore.length < pathCoreOverflow) {
    //           exported.pathACore.push(abilities[ability].id);  
    //         } else {
    //           exported.pathACoreOverflow.push(abilities[ability].id);
    //         }
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl1) {
    //         abilities[ability].meterRequirement = 3;
    //         exported.pathAOpt.lvl1 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl2) {
    //         abilities[ability].meterRequirement = 5;
    //         exported.pathAOpt.lvl2 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl3) {
    //         abilities[ability].meterRequirement = 7;
    //         exported.pathAOpt.lvl3 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl4) {
    //         abilities[ability].meterRequirement = 9;
    //         exported.pathAOpt.lvl4 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl5) {
    //         abilities[ability].meterRequirement = 11;
    //         exported.pathAOpt.lvl5 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl6) {
    //         abilities[ability].meterRequirement = 13;
    //         exported.pathAOpt.lvl6 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.a.optionalAbilities.lvl7) {
    //         abilities[ability].meterRequirement = 15;
    //         exported.pathAOpt.lvl7 = abilities[ability].id;
    //       }
    //       if (this.arrayContains(career.paths.b.coreAbilities, abilities[ability].id)) {
    //         if (exported.pathBCore.length < pathCoreOverflow) {
    //           exported.pathBCore.push(abilities[ability].id);  
    //         } else {
    //           exported.pathBCoreOverflow.push(abilities[ability].id);
    //         }
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl1) {
    //         abilities[ability].meterRequirement = 3;
    //         exported.pathBOpt.lvl1 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl2) {
    //         abilities[ability].meterRequirement = 5;
    //         exported.pathBOpt.lvl2 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl3) {
    //         abilities[ability].meterRequirement = 7;
    //         exported.pathBOpt.lvl3 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl4) {
    //         abilities[ability].meterRequirement = 9;
    //         exported.pathBOpt.lvl4 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl5) {
    //         abilities[ability].meterRequirement = 11;
    //         exported.pathBOpt.lvl5 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl6) {
    //         abilities[ability].meterRequirement = 13;
    //         exported.pathBOpt.lvl6 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.b.optionalAbilities.lvl7) {
    //         abilities[ability].meterRequirement = 15;
    //         exported.pathBOpt.lvl7 = abilities[ability].id;
    //       }
    //       if (this.arrayContains(career.paths.c.coreAbilities, abilities[ability].id)) {
    //         if (exported.pathCCore.length < pathCoreOverflow) {
    //           exported.pathCCore.push(abilities[ability].id);  
    //         } else {
    //           exported.pathCCoreOverflow.push(abilities[ability].id);
    //         }
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl1) {
    //         abilities[ability].meterRequirement = 3;
    //         exported.pathCOpt.lvl1 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl2) {
    //         abilities[ability].meterRequirement = 5;
    //         exported.pathCOpt.lvl2 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl3) {
    //         abilities[ability].meterRequirement = 7;
    //         exported.pathCOpt.lvl3 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl4) {
    //         abilities[ability].meterRequirement = 9;
    //         exported.pathCOpt.lvl4 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl5) {
    //         abilities[ability].meterRequirement = 11;
    //         exported.pathCOpt.lvl5 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl6) {
    //         abilities[ability].meterRequirement = 13;
    //         exported.pathCOpt.lvl6 = abilities[ability].id;
    //       }
    //       if (abilities[ability].id === career.paths.c.optionalAbilities.lvl7) {
    //         abilities[ability].meterRequirement = 15;
    //         exported.pathCOpt.lvl7 = abilities[ability].id;
    //       }
    //     }
    //     // Create new abilities object using abilityId as a key
    //     exported.abilities[abilities[ability].id] = abilities[ability];
    //   }
    // );
    // return exported;
  }

  loadCareerData(slug) {
    // Fetch careers and abilities
    this.props.fetchCareers();
    this.props.fetchAbilities(slug);

    // Set career slug in app state
    this.props.setSlug(slug);
  }

  componentWillReceiveProps(nextProps) {

    // This will be run when a new career is selected from the Sidebar
    // Manually force the loading of new data
    if (this.props.match.params && (this.props.match.params.slug != nextProps.match.params.slug)) {
      // Check if it's a valid career name
      if (this.props.careers.hasOwnProperty(nextProps.match.params.slug)) {
        
        // Reset abilities array to force the loading animation and organise new abilities
        this.props.resetAbilities();
        this.loadCareerData(nextProps.match.params.slug);

      } else {
          // TODO redirect to not found page on else here
          console.warn("CAREER DOES NOT EXIST!")
      }
    }

    // Detects when abilities have been updated then calls function to populate ability types
    if (Object.keys(this.props.abilities).length == 0 && Object.keys(nextProps.abilities).length > 0) {
      this.organiseAbilities(nextProps.abilities);
    }
  }

  componentDidMount() {
    // Load career data on initial load
    const { slug } = this.props.match.params;
    this.loadCareerData(slug);
  }

  renderContent() {

    let hasCareerLoaded = (Object.keys(this.props.careers).length > 0
                          && this.props.slug
                          && Object.keys(this.props.abilities).length > 0);

    if (!hasCareerLoaded) {
      return (
        <div className={css.loadingContainer}>
          <Loading />
        </div>
      );
    }

    return (
      <div className="paddingTop paddingRight paddingLeft paddingBottom">
        <div className="marginBottom--medium">
          <Breadcrumb />
        </div>
        <div className="marginBottom">
          <BarXp />
        </div>
        <div className="marginBottom--medium">
          <BarRenown />
        </div>
        <div className="grid">
          <div className="grid-col-1 grid-col-7-12@sm-min grid-col-10-24@md-min">
            <div className="marginBottom--medium heightTitle">
              <CareerTitle />
            </div>
            </div>
          <div className="grid-col-1-3 grid-col-1-2@mobile grid-col-1-6@sm-min grid-col-1-6@md-min">
            <div className="heightTitle marginBottom--medium marginLeft@sm-min">
              <SelectLevel />
            </div>
          </div>
          <div className="grid-col-2-3 grid-col-1-2@mobile grid-col-1-4@sm-min grid-col-10-24@md-min">
            <div className="heightTitle marginBottom--medium">
              <SelectRenown />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {

    const containerClass = classNames({
      [css.wrapper]: !this.props.sidebar,
      [css.wrapperSidebar]: this.props.sidebar,
    });

    return (
      <div className="heightFull">
        <div className={containerClass}>
          {this.renderContent()}
        </div>
        <Overlay overlayVisible={true} />
        <Sidebar />
      </div>
    );
  }
}

function mapStateToProps({ sidebar, abilities, careers, slug }) {
  return {
    abilities,
    careers,
    sidebar,
    slug
  };
}

export default connect(
  mapStateToProps, 
  { 
    fetchAbilities, 
    resetAbilities, 
    fetchCareers, 
    setSlug,
    addCoreAbility,
    addCoreTactic,
    addCoreMorale
  }
)(Career);