import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Career.css';
import { getAbilityType } from '../helpers/abilities';

import { fetchAbilities, resetAbilities } from '../actions/actionAbilities';
import { setAbilitiesObject, resetAbilitiesObject } from '../actions/actionAbilitiesObject';
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
import CoreAbilities from './CoreAbilities';

class Career extends Component {

  constructor(props) {
    super(props);
  }

  organiseAbilities(abilities) {
    
    // Extract the core abilities from the raw data (abilities.data)
    for (let i = 0; i < abilities.data.length; i++) {
      let ability = abilities.data[i];
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

    // Create new AbilitiesObject property in state
    // This is an indexed object of all abilities
    // Will make it easy to query an ability when we have only the ability id
    this.props.setAbilitiesObject(abilities.data);
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
        this.props.resetAbilitiesObject();
        this.loadCareerData(nextProps.match.params.slug);

      } else {
          // TODO redirect to not found page on else here
          console.warn("CAREER DOES NOT EXIST!")
      }
    }

    // Detects when abilities have been updated then calls function to populate ability types
    if (Object.keys(this.props.abilities).length == 0 && Object.keys(nextProps.abilities).length > 0) {
      
      // Transform the abilities data and extract core abilities
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
                          && Object.keys(this.props.abilities).length > 0)
                          && Object.keys(this.props.abilitiesObject).length > 0;

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
        <div className="grid">
          <div className="grid-col-1 grid-col-10-24@md-min">

            <div className="marginBottom">
              <CoreAbilities />
            </div>

            <div className="marginBottom">
              
            </div>

            <div className="marginBottom">
              
            </div>

          </div>
          <div className="grid-col-1 grid-col-14-24@md-min">

            <div className="marginLeft@md-min marginBottom">
              
            </div>

            <div className="marginLeft@md-min">
              
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

function mapStateToProps({ sidebar, abilities, abilitiesObject, careers, slug }) {
  return {
    abilities,
    abilitiesObject,
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
    setAbilitiesObject,
    resetAbilitiesObject,
    fetchCareers, 
    setSlug,
    addCoreAbility,
    addCoreTactic,
    addCoreMorale
  }
)(Career);