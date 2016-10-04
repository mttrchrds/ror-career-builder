import React from 'react';
import h from '../helpers';
import Mastery from './Mastery';
import CoreAbilities from './CoreAbilities';
import CoreMorales from './CoreMorales';
import CoreTactics from './CoreTactics';
import Sidebar from './Sidebar';
import CareerTitle from './CareerTitle';
import BarXp from './BarXp';
import BarRenown from './BarRenown';
import Breadcrumb from './Breadcrumb';
import SelectLevel from './SelectLevel';
import SelectRenown from './SelectRenown';
import ActionButtons from './ActionButtons';
import Modal from './Modal';
import Overlay from './Overlay';
import Loading from './Loading';
import classNames from 'classnames';
import css from '../../css/components/Career.css';

class Career extends React.Component {

  constructor() {
    super();
  }

  componentWillReceiveProps() {

  }

  componentDidMount() {
    this.props.loadCareer(this.props.params.careerName);
  }

  render() {
    const containerClass = classNames({
      [css.wrapper]: !this.props.sidebar.visible,
      [css.wrapperSidebar]: this.props.sidebar.visible,
    });
    if (this.props.careerLoading) {
      return (
        <div className={css.loadingContainer}>
          <Loading />
        </div>
      );
    }
    return (
      <div className="heightFull">
        <div className={containerClass}>

          <div className="marginBottom--medium">
            <Breadcrumb
              career={this.props.career}
              updateSidebarVisibility={this.props.updateSidebarVisibility}
              updateOverlayVisibility={this.props.updateOverlayVisibility}
              gaChangeCareer={this.props.gaChangeCareer}
            />
          </div>

          <div className="marginBottom">
            {/* <BarXp currentLevel={this.state.currentLevel} /> */}
          </div>

          <div className="marginBottom--medium">
            {/* <BarRenown currentRenown={this.state.currentRenown} currentLevel={this.state.currentLevel} /> */}
          </div>

          <div className="grid">
            <div className="grid-col-1 grid-col-7-12@sm-min grid-col-10-24@md-min">

              <div className="marginBottom--medium heightTitle">
                {/* <CareerTitle careerSlug={this.state.careerSlug}
                  career={this.state.career}
                /> */}
              </div>

            </div>
            <div className="grid-col-1-3 grid-col-1-2@mobile grid-col-1-6@sm-min grid-col-1-6@md-min">

              <div className="heightTitle marginBottom--medium marginLeft@sm-min">
                {/* <SelectLevel
                  updateLevel={this.updateLevel}
                  currentLevel={this.state.currentLevel}
                  setMasteryPoints={this.setMasteryPoints}
                  currentRenown={this.state.currentRenown}
                  setCurrentTacticLimit={this.setCurrentTacticLimit}
                  resetSelections={this.resetSelections}
                /> */}
              </div>

            </div>
            <div className="grid-col-2-3 grid-col-1-2@mobile grid-col-1-4@sm-min grid-col-10-24@md-min">

              <div className="heightTitle marginBottom--medium">
                {/* <SelectRenown
                  currentLevel={this.state.currentLevel}
                  currentRenown={this.state.currentRenown}
                  updateRenown={this.updateRenown}
                  setMasteryPoints={this.setMasteryPoints}
                  resetSelections={this.resetSelections}
                /> */}
              </div>

            </div>
          </div>

          <div className="grid">
            <div className="grid-col-1 grid-col-10-24@md-min">

              <div className="marginBottom">
                {/* <CoreAbilities
                  currentLevel={this.state.currentLevel}
                  coreAbilities={this.state.coreAbilities}
                  abilities={this.state.abilities}
                /> */}
              </div>

              <div className="marginBottom">
                {/* <CoreMorales
                  currentLevel={this.state.currentLevel}
                  abilities={this.state.abilities}
                  morales={this.state.coreMorales}
                  selectedMorale1={this.state.selectedMorale1}
                  selectedMorale2={this.state.selectedMorale2}
                  selectedMorale3={this.state.selectedMorale3}
                  selectedMorale4={this.state.selectedMorale4}
                  updateSelectedMorale={this.updateSelectedMorale}
                /> */}
              </div>

              <div className="marginBottom">
                {/* <CoreTactics
                  currentLevel={this.state.currentLevel}
                  abilities={this.state.abilities}
                  tactics={this.state.coreTactics}
                  currentTacticLimit={this.state.currentTacticLimit}
                  selectedTactics={this.state.selectedTactics}
                  updateSelectedTactics={this.updateSelectedTactics}
                /> */}
              </div>

            </div>
            <div className="grid-col-1 grid-col-14-24@md-min">

              <div className="marginLeft@md-min marginBottom">
                {/* <Mastery
                  career={this.state.career}
                  currentLevel={this.state.currentLevel}
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
                  updateMasteryPoints={this.updateMasteryPoints}
                  incrementMasteryPoints={this.incrementMasteryPoints}
                  decrementMasteryPoints={this.decrementMasteryPoints}
                  incrementPathMeter={this.incrementPathMeter}
                  decrementPathMeter={this.decrementPathMeter}
                  abilities={this.state.abilities}
                  selectedMasteries={this.state.selectedMasteries}
                  updateSelectedMasteries={this.updateSelectedMasteries}
                  updateSelectedTactics={this.updateSelectedTactics}
                  updateSelectedMorale={this.updateSelectedMorale}
                  updateCoreTactics={this.updateCoreTactics}
                  updateCoreMorales={this.updateCoreMorales}
                /> */}
              </div>

              <div className="marginLeft@md-min">
                {/* <ActionButtons
                  resetCareer={this.resetCareer}
                  careerSlug={this.state.careerSlug}
                  currentLevel={this.state.currentLevel}
                  currentRenown={this.state.currentRenown}
                  currentTacticLimit={this.state.currentTacticLimit}
                  masteryPoints={this.state.masteryPoints}
                  pathAMeter={this.state.pathAMeter}
                  pathBMeter={this.state.pathBMeter}
                  pathCMeter={this.state.pathCMeter}
                  selectedMorale1={this.state.selectedMorale1}
                  selectedMorale2={this.state.selectedMorale2}
                  selectedMorale3={this.state.selectedMorale3}
                  selectedMorale4={this.state.selectedMorale4}
                  selectedMasteries={this.state.selectedMasteries}
                  selectedTactics={this.state.selectedTactics}
                  updateModalVisibility={this.updateModalVisibility}
                  updateModalContent={this.updateModalContent}
                  career={this.state.career}
                  updateSidebarVisibility={this.updateSidebarVisibility}
                  updateOverlayVisibility={this.updateOverlayVisibility}
                  gaCareerShared={this.gaCareerShared}
                  gaChangeCareer={this.gaChangeCareer}
                /> */}
              </div>

            </div>
          </div>

          {/* <Modal
            modal={this.state.modal}
            updateModalVisibility={this.updateModalVisibility}
            updateOverlayVisibility={this.updateOverlayVisibility}
          /> */}
        </div>

        <Overlay
          overlay={this.props.overlay}
          clickOverlay={this.props.clickOverlay}
          visible
        />

        <Sidebar
          careers={this.props.careers}
          updateSidebarVisibility={this.props.updateSidebarVisibility}
          updateOverlayVisibility={this.props.updateOverlayVisibility}
          sidebar={this.props.sidebar}
          gaCareerSelected={this.props.gaCareerSelected}
        />

      </div>
    );
  }
}

Career.propTypes = {
  updateSidebarVisibility: React.PropTypes.func,
  updateOverlayVisibility: React.PropTypes.func,
  sidebar: React.PropTypes.object,
  gaCareerSelected: React.PropTypes.func,
  gaChangeCareer: React.PropTypes.func,
  overlay: React.PropTypes.object,
  clickOverlay: React.PropTypes.func,
  careerLoading: React.PropTypes.bool,
  loadCareer: React.PropTypes.func,
  career: React.PropTypes.object,
  careerSlug: React.PropTypes.string,
  abilities: React.PropTypes.object,
  coreAbilities: React.PropTypes.array,
  coreMorales: React.PropTypes.array,
  coreTactics: React.PropTypes.array,
  pathACoreAbilities: React.PropTypes.array,
  pathACoreOverflow: React.PropTypes.array,
  pathAOptionalAbilities: React.PropTypes.object,
  pathBCoreAbilities: React.PropTypes.array,
  pathBCoreOverflow: React.PropTypes.array,
  pathBOptionalAbilities: React.PropTypes.object,
  pathCCoreAbilities: React.PropTypes.array,
  pathCCoreOverflow: React.PropTypes.array,
  pathCOptionalAbilities: React.PropTypes.object,
};

export default Career;
