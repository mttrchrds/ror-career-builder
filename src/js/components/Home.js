import React from 'react';
import h from '../helpers';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import CareerItem from './CareerItem';
import Overlay from './Overlay';
import News from './News';
import css from '../../css/components/Home.css';

class Home extends React.Component {

  constructor() {
    super();
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.clickMasthead = this.clickMasthead.bind(this);
    this.clickMastheadMobile = this.clickMastheadMobile.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
    this.gaCareerSelected = this.gaCareerSelected.bind(this);
    this.state = {
      mastheadActive: false,
      sidebar: {
        visible: false,
      },
      overlay: {
        visible: false,
      },
    };
  }

  // Hide/show overlay, param is boolean
  updateOverlayVisibility(status) {
    this.state.overlay.visible = status;
    this.setState({
      overlay: this.state.overlay,
    });
  }

  hideOverlay() {
    this.updateSidebarVisibility(false);
    this.updateOverlayVisibility(false);
  }

  // Hide/show sidebar, param is boolean
  updateSidebarVisibility(status) {
    this.state.sidebar.visible = status;
    this.setState({
      sidebar: this.state.sidebar,
    });
  }

  renderCareers(key, faction) {
    if (this.props.careers[key].race === faction) {
      return (
        <CareerItem key={key} gaCareerSelected={this.gaCareerSelected} shortName={key} careerName={this.props.careers[key].name} />
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
    this.updateSidebarVisibility(true);
    this.updateOverlayVisibility(true);
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
    const copyClass = classNames({
      [css.copy]: true,
      'marginBottom--large': true,
      'marginTop@mobile': true,
      'marginTop--medium': true,
      marginRight: true,
      'marginLeft@mobile': true,
    });
    const githubUrl = 'https://github.com/mattyrichards/ror-career-builder';
    const githubUrlIssues = `${githubUrl}/issues`;
    return (
      <div className="heightFull">
        <div className={css.wrapper}>
          <div className={css.container}>
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
                          <img src="/images/icons/dwarf.png" className={css.careersRaceIcon} />
                          <div className={css.careersRaceTitle}>Dwarves</div>
                        </div>
                        {Object.keys(this.props.careers).map(
                          (key) => this.renderCareers(key, 'Dwarf')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="row row--v-center marginBottom">
                          <img src="/images/icons/high-elf.png" className={css.careersRaceIcon} />
                          <div className={css.careersRaceTitle}>High Elves</div>
                        </div>
                        {Object.keys(this.props.careers).map(
                          (key) => this.renderCareers(key, 'High Elf')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="row row--v-center marginBottom">
                          <img src="/images/icons/empire.png" className={css.careersRaceIcon} />
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
                          <img src="/images/icons/greenskin.png" className={css.careersRaceIcon} />
                          <div className={css.careersRaceTitle}>Greenskins</div>
                        </div>
                        {Object.keys(this.props.careers).map(
                          (key) => this.renderCareers(key, 'Greenskin')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="row row--v-center marginBottom">
                          <img src="/images/icons/dark-elf.png" className={css.careersRaceIcon} />
                          <div className={css.careersRaceTitle}>Dark Elves</div>
                        </div>
                        {Object.keys(this.props.careers).map(
                          (key) => this.renderCareers(key, 'Dark Elf')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="row row--v-center marginBottom">
                          <img src="/images/icons/chaos.png" className={css.careersRaceIcon} />
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
            <div className="grid">
              <div className="grid-col-1-3 grid-col-1@mobile">
                <div className="marginTop--medium marginTop@mobile marginLeft--medium marginLeft@mobile marginRight--medium marginRight@mobile marginBottom--medium marginBottom--none@mobile">
                  <News />
                </div>
              </div>
              <div className="grid-col-2-3 grid-col-1@mobile">
                <div className={copyClass}>
                  <p className={css.copyText}>Warhammer Online: Age of Reckoning has returned.
                  Resurrected by volunteers on a private server, we now have <a className={css.copyLink} href="http://www.returnofreckoning.com" target="blank">Return of Reckoning</a>.
                  Inspired by the work of these developers comes RoR Career Builder.</p>
                  <p className={css.copyText}>This web app aims to replace and improve upon the great work done by <a className={css.copyLink} href="http://waronlinebuilder.org" target="blank">Warhammer Online Career Builder</a> back in 2013.</p>
                  <p className={css.copyText}>Details of updates will appear on this page.</p>
                  <p className={css.copyText}>All code is available on <a href={githubUrl} className={css.copyLink} target="blank">Github</a>
                  . Feel free to fork, contribute, <a href={githubUrlIssues} className={css.copyLink} target="blank">raise bugs and make suggestions</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Overlay
          overlay={this.state.overlay}
          hideOverlay={this.hideOverlay}
          visible
        />
        <Sidebar
          careers={this.props.careers}
          updateSidebarVisibility={this.updateSidebarVisibility}
          updateOverlayVisibility={this.updateOverlayVisibility}
          sidebar={this.state.sidebar}
          gaCareerSelected={this.gaCareerSelected}
        />
      </div>
    );
  }

  /*
  * -----------------------
  * Google Analytics Events
  * -----------------------
  */

  // Google Analytics event after selecting career
  gaCareerSelected(careerKey) {
    h.gaEvent('Career selected', this.props.careers[careerKey].name);
    h.gaEvent('Class selected', this.props.careers[careerKey].class);
    h.gaEvent('Race selected', this.props.careers[careerKey].race);
  }
}

Home.propTypes = {
  careers: React.PropTypes.object,
};

export default Home;
