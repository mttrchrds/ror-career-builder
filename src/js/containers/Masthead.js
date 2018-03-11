import React, { Component } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';
import css from '../../css/components/Masthead.css';
import { staticPath } from '../../../config';

import CareerItem from '../containers/CareerItem';

import { toggleSidebar } from '../actions/actionSidebar';
import { toggleOverlay } from '../actions/actionOverlay';

class Masthead extends Component {

  constructor(props) {
    super(props);

    this.clickMasthead = this.clickMasthead.bind(this);
    this.clickMastheadMobile = this.clickMastheadMobile.bind(this);

    this.state = {
      mastheadActive: false,
    }
  }

  renderCareers(key, faction) {
    if (this.props.careers[key].race === faction) {
      return (
        <div className={css.careersItem} key={key}>
          <CareerItem career={this.props.careers[key]} />
        </div>
      );
    }
    return false;
  }

  clickMasthead(e) {
    e.preventDefault();
    this.setState({
      mastheadActive: !this.state.mastheadActive,
    });
  }

  clickMastheadMobile(e) {
    e.preventDefault();
    this.props.toggleOverlay(!this.props.overlay);
    this.props.toggleSidebar(!this.props.sidebar);
  }

  render() {
    const mastheadClass = classNames({
      [css.masthead]: !this.state.mastheadActive,
      [css.mastheadActive]: this.state.mastheadActive,
    });
    const mastheadTitleClass = classNames({
      [css.mastheadTitle]: !this.state.mastheadActive,
      [css.mastheadTitleActive]: this.state.mastheadActive,
    });
    const mastheadCtaClass = classNames({
      [css.mastheadCta]: !this.state.mastheadActive,
      [css.mastheadCtaActive]: this.state.mastheadActive,
      'hidden@mobile': true,
    });
    const mastheadCtaClassMobile = classNames({
      [css.mastheadCta]: !this.state.mastheadActive,
      [css.mastheadCtaActive]: this.state.mastheadActive,
      'visible@mobile': true,
    });
    const mastheadFooterClass = classNames({
      [css.mastheadFooter]: !this.state.mastheadActive,
      [css.mastheadFooterActive]: this.state.mastheadActive,
    });
    const careersContainerLeftClass = classNames({
      [css.careersContainerLeft]: !this.state.mastheadActive,
      [css.careersContainerLeftActive]: this.state.mastheadActive,
    });
    const careersContainerRightClass = classNames({
      [css.careersContainerRight]: !this.state.mastheadActive,
      [css.careersContainerRightActive]: this.state.mastheadActive,
    });
    const iconEmpire = `${staticPath}images/icons/empire.png`;
    const iconDwarf = `${staticPath}images/icons/dwarf.png`;
    const iconElf = `${staticPath}images/icons/high-elf.png`;
    const iconDarkElf = `${staticPath}images/icons/dark-elf.png`;
    const iconGreenskin = `${staticPath}images/icons/greenskin.png`;
    const iconChaos = `${staticPath}images/icons/chaos.png`;
    return (
      <div className={mastheadClass}>
        <div className={css.mastheadOverlay}>
          <div className={mastheadTitleClass}>RoR Career Builder</div>
          <div className={css.mastheadSubtitle}>Online Career Builder for Return of Reckoning</div>
          <div className={mastheadCtaClass}>
            <button className={css.mastheadCtaButton} type="button" onClick={this.clickMasthead}>
              Select career
            </button>
          </div>
          <div className={mastheadCtaClassMobile}>
            <button className={css.mastheadCtaButton} type="button" onClick={this.clickMastheadMobile}>
              Select career
            </button>
          </div>
          <a className={mastheadFooterClass} href="#" onClick={this.clickMasthead}>Hide careers</a>
          <div className={css.careers}>
            <div className={careersContainerLeftClass}>
              <div className={css.careersTitle}>Order</div>
              <div className={css.careersFaction}>
                <div className={css.careersRace}>
                  <div className="row row--v-center marginBottom">
                    <img src={iconDwarf} className={css.careersRaceIcon} />
                    <div className={css.careersRaceTitle}>Dwarves</div>
                  </div>
                  {Object.keys(this.props.careers).map(
                    (key) => this.renderCareers(key, 'Dwarf')
                  )}
                </div>
                <div className={css.careersRace}>
                  <div className="row row--v-center marginBottom">
                    <img src={iconElf} className={css.careersRaceIcon} />
                    <div className={css.careersRaceTitle}>High Elves</div>
                  </div>
                  {Object.keys(this.props.careers).map(
                    (key) => this.renderCareers(key, 'High Elf')
                  )}
                </div>
                <div className={css.careersRace}>
                  <div className="row row--v-center marginBottom">
                    <img src={iconEmpire} className={css.careersRaceIcon} />
                    <div className={css.careersRaceTitle}>Empire</div>
                  </div>
                  {Object.keys(this.props.careers).map(
                    (key) => this.renderCareers(key, 'Empire')
                  )}
                </div>
              </div>
            </div>
            <div className={careersContainerRightClass}>
              <div className={css.careersTitle}>Destruction</div>
              <div className={css.careersFaction}>
                <div className={css.careersRace}>
                  <div className="row row--v-center marginBottom">
                    <img src={iconGreenskin} className={css.careersRaceIcon} />
                    <div className={css.careersRaceTitle}>Greenskins</div>
                  </div>
                  {Object.keys(this.props.careers).map(
                    (key) => this.renderCareers(key, 'Greenskin')
                  )}
                </div>
                <div className={css.careersRace}>
                  <div className="row row--v-center marginBottom">
                    <img src={iconDarkElf} className={css.careersRaceIcon} />
                    <div className={css.careersRaceTitle}>Dark Elves</div>
                  </div>
                  {Object.keys(this.props.careers).map(
                    (key) => this.renderCareers(key, 'Dark Elf')
                  )}
                </div>
                <div className={css.careersRace}>
                  <div className="row row--v-center marginBottom">
                    <img src={iconChaos} className={css.careersRaceIcon} />
                    <div className={css.careersRaceTitle}>Chaos</div>
                  </div>
                  {Object.keys(this.props.careers).map(
                    (key) => this.renderCareers(key, 'Chaos')
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ careers, sidebar, overlay }) {
  return {
    careers,
    sidebar,
    overlay
  };
}

export default connect(mapStateToProps, { toggleSidebar, toggleOverlay })(Masthead);
