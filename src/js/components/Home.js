import React from 'react';
import h from '../helpers';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import CareerItem from './CareerItem';
import Overlay from './Overlay';
import IconChevronRight from '../icons/IconChevronRight';
import '../../scss/components/Home.scss';
import css from '../../css/components/Home.css';

class Home extends React.Component {

  constructor() {
    super();
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareers = this.renderCareers.bind(this);
    this.clickMasthead = this.clickMasthead.bind(this);
    this.clickMastheadMobile = this.clickMastheadMobile.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
    this.gaCareerSelected = this.gaCareerSelected.bind(this);
    this.state = {
      careers: {},
      mastheadActive: false,
      sidebar: {
        visible: false,
      },
      overlay: {
        visible: false,
      },
    };
  }

  componentDidMount() {
    h.getJSON('/json/careers.json', (result) => {
      this.setState({
        careers: result,
      });
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
    if (this.state.careers[key].race === faction) {
      return (
        <div key={key}>
          <CareerItem gaCareerSelected={this.gaCareerSelected} shortName={key} careerName={this.state.careers[key].name} />
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
                        <div className="c-career__subheading u-margin__bottom">
                          <img src="/images/icons/dwarf.png" className="c-title__icon c-title__icon--smaller" />Dwarves
                        </div>
                        {Object.keys(this.state.careers).map(
                          (key) => this.renderCareers(key, 'Dwarf')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="c-career__subheading u-margin__bottom">
                          <img src="/images/icons/high-elf.png" className="c-title__icon c-title__icon--smaller" />High Elves
                        </div>
                        {Object.keys(this.state.careers).map(
                          (key) => this.renderCareers(key, 'High Elf')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="c-career__subheading u-margin__bottom">
                          <img src="/images/icons/empire.png" className="c-title__icon c-title__icon--smaller" />Empire
                        </div>
                        {Object.keys(this.state.careers).map(
                          (key) => this.renderCareers(key, 'Empire')
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={careersContainerRightClass}>
                    <div className={css.careersTitle}>Destruction</div>
                    <div className={css.careersFaction}>
                      <div className={css.careersRace}>
                        <div className="c-career__subheading u-margin__bottom">
                          <img src="/images/icons/greenskin.png" className="c-title__icon c-title__icon--smaller" />Greenskins
                        </div>
                        {Object.keys(this.state.careers).map(
                          (key) => this.renderCareers(key, 'Greenskin')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="c-career__subheading u-margin__bottom">
                          <img src="/images/icons/dark-elf.png" className="c-title__icon c-title__icon--smaller" />Dark Elves
                        </div>
                        {Object.keys(this.state.careers).map(
                          (key) => this.renderCareers(key, 'Dark Elf')
                        )}
                      </div>
                      <div className={css.careersRace}>
                        <div className="c-career__subheading u-margin__bottom">
                          <img src="/images/icons/chaos.png" className="c-title__icon c-title__icon--smaller" />Chaos
                        </div>
                        {Object.keys(this.state.careers).map(
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
                <div className="c-list c-box u-margin__top u-margin__left u-margin__right">
                  <div className="c-list__heading">Latest updates</div>
                  <div className="c-list__item">
                    <span className="c-list__item__icon"><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
                    <div className="c-list__item__title">12/6/2016</div>
                    A number of UI improvements to Mastery area.
                  </div>
                  <div className="c-list__item">
                    <span className="c-list__item__icon"><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
                    <div className="c-list__item__title">10/6/2016</div>
                    First major update. Mastery abilities can now be activated independent of selection. Interface reskinned.
                  </div>
                  <div className="c-list__item">
                    <span className="c-list__item__icon"><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
                    <div className="c-list__item__title">1/6/2016</div>
                    We are live :)
                  </div>
                </div>
              </div>
              <div className="grid-col-2-3 grid-col-1@mobile">
                <div className="c-home__copy u-margin__bottom--large u-margin__top-mobile u-margin__top--large u-margin__right u-margin__left-mobile">
                  <p>Warhammer Online: Age of Reckoning has returned.
                  Resurrected by volunteers on a private server, we now have <a className="c-home__copy__link" href="http://www.returnofreckoning.com" target="blank">Return of Reckoning</a>.
                  Inspired by the work of these developers comes RoR Career Builder.</p>
                  <p>This web app aims to replace and improve upon the great work done by <a className="c-home__copy__link" href="http://waronlinebuilder.org" target="blank">Warhammer Online Career Builder</a> back in 2013.</p>
                  <p>Details of updates will appear on this page.</p>
                  <p>All code is available on <a href={githubUrl} className="c-home__copy__link" target="blank">Github</a>
                  . Feel free to fork, contribute, <a href={githubUrlIssues} className="c-home__copy__link" target="blank">raise bugs and make suggestions</a>.</p>
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
          careers={this.state.careers}
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
    h.gaEvent('Career selected', this.state.careers[careerKey].name);
    h.gaEvent('Class selected', this.state.careers[careerKey].class);
    h.gaEvent('Race selected', this.state.careers[careerKey].race);
  }
}

export default Home;
