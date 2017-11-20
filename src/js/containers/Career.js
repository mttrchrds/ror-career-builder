import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Career.css';

import { fetchAbilities, resetAbilities } from '../actions/actionAbilities';
import { fetchCareers } from '../actions/actionCareers';
import { setSlug } from '../actions/actionSlug';

import Sidebar from './Sidebar';
import Overlay from './Overlay';
import Breadcrumb from './Breadcrumb';
import Loading from './Loading';

class Career extends Component {

  constructor(props) {
    super(props);
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
        
        // Reset abilities array to force the loading animation
        this.props.resetAbilities();
        this.loadCareerData(nextProps.match.params.slug);

      } else {
          // TODO redirect to not found page on else here
          console.warn("CAREER DOES NOT EXIST!")
      }
    }
  }

  componentDidMount() {

    const { slug } = this.props.match.params;
    this.loadCareerData(slug);
  }

  renderContent() {

    let hasCareerLoaded = (this.props.careers && Object.keys(this.props.careers).length > 0) 
                          && this.props.slug
                          && (this.props.abilities && this.props.abilities.length > 0);

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

export default connect(mapStateToProps, { fetchAbilities, resetAbilities, fetchCareers, setSlug })(Career);