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

  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    console.warn("Career has mounted");
    console.log("Loading new career in componentWillReceiveProps.")
    this.props.loadCareer(this.props.params.careerName);
  }

  componentWillReceiveProps(nextProps) {
    console.warn("Career componentWillReceiveProps");
    // When changing career on the career page
    if (!nextProps.careerLoading) {
      if (nextProps.params.careerName !== this.props.careerSlug) {
        console.log("Loading new career in componentWillReceiveProps.");
        console.log("nextprops= ", nextProps.params.careerName);
        console.log("careerSlug= ", this.props.careerSlug);
        console.log("careerLoading= ", nextProps.careerLoading);
        this.props.loadCareer(nextProps.params.careerName);
      }
    }
  }

  renderContent() {



    if (this.props.careerLoading) {
      return (
        <div className={css.loadingContainer}>
          <Loading />
        </div>
      );
    } else {
      return (
        <div>

          <div className="marginBottom--medium">
            <Breadcrumb
              career={this.props.career}
              updateSidebarVisibility={this.props.updateSidebarVisibility}
              updateOverlayVisibility={this.props.updateOverlayVisibility}
              gaChangeCareer={this.props.gaChangeCareer}
            />
          </div>

          <div className="marginBottom">
            <BarXp currentLevel={this.props.currentLevel} />
          </div>

          <div className="marginBottom--medium">
            <BarRenown currentRenown={this.props.currentRenown} currentLevel={this.props.currentLevel} />
          </div>

          <div className="grid">
            <div className="grid-col-1 grid-col-7-12@sm-min grid-col-10-24@md-min">

              <div className="marginBottom--medium heightTitle">
                <CareerTitle careerSlug={this.props.careerSlug}
                  career={this.props.career}
                />
              </div>

            </div>
            <div className="grid-col-1-3 grid-col-1-2@mobile grid-col-1-6@sm-min grid-col-1-6@md-min">

              <div className="heightTitle marginBottom--medium marginLeft@sm-min">
                <SelectLevel
                  updateLevel={this.props.updateLevel}
                  currentLevel={this.props.currentLevel}
                  updateMasteryPoints={this.props.updateMasteryPoints}
                  currentRenown={this.props.currentRenown}
                  updateCurrentTacticLimit={this.props.updateCurrentTacticLimit}
                  resetSelections={this.props.resetSelections}
                />
              </div>

            </div>
            <div className="grid-col-2-3 grid-col-1-2@mobile grid-col-1-4@sm-min grid-col-10-24@md-min">

              <div className="heightTitle marginBottom--medium">
                <SelectRenown
                  currentLevel={this.props.currentLevel}
                  currentRenown={this.props.currentRenown}
                  updateRenown={this.props.updateRenown}
                  updateMasteryPoints={this.props.updateMasteryPoints}
                  resetSelections={this.props.resetSelections}
                />
              </div>

            </div>
          </div>

          <div className="grid">
            <div className="grid-col-1 grid-col-10-24@md-min">

              <div className="marginBottom">
                <CoreAbilities
                  currentLevel={this.props.currentLevel}
                  coreAbilities={this.props.coreAbilities}
                  abilities={this.props.abilities}
                />
              </div>

              <div className="marginBottom">
                <CoreMorales
                  currentLevel={this.props.currentLevel}
                  abilities={this.props.abilities}
                  coreMorales={this.props.coreMorales}
                  selectedMorale1={this.props.selectedMorale1}
                  selectedMorale2={this.props.selectedMorale2}
                  selectedMorale3={this.props.selectedMorale3}
                  selectedMorale4={this.props.selectedMorale4}
                  updateSelectedMorale={this.props.updateSelectedMorale}
                />
              </div>

              <div className="marginBottom">
                <CoreTactics
                  currentLevel={this.props.currentLevel}
                  abilities={this.props.abilities}
                  coreTactics={this.props.coreTactics}
                  currentTacticLimit={this.props.currentTacticLimit}
                  selectedTactics={this.props.selectedTactics}
                  updateSelectedTactics={this.props.updateSelectedTactics}
                />
              </div>

            </div>
            <div className="grid-col-1 grid-col-14-24@md-min">

              <div className="marginLeft@md-min marginBottom">
                <Mastery
                  career={this.props.career}
                  currentLevel={this.props.currentLevel}
                  pathACoreAbilities={this.props.pathACoreAbilities}
                  pathACoreOverflow={this.props.pathACoreOverflow}
                  pathAOptionalAbilities={this.props.pathAOptionalAbilities}
                  pathBCoreAbilities={this.props.pathBCoreAbilities}
                  pathBCoreOverflow={this.props.pathBCoreOverflow}
                  pathBOptionalAbilities={this.props.pathBOptionalAbilities}
                  pathCCoreAbilities={this.props.pathCCoreAbilities}
                  pathCCoreOverflow={this.props.pathCCoreOverflow}
                  pathCOptionalAbilities={this.props.pathCOptionalAbilities}
                  masteryPoints={this.props.masteryPoints}
                  pathAMeter={this.props.pathAMeter}
                  pathBMeter={this.props.pathBMeter}
                  pathCMeter={this.props.pathCMeter}
                  updateMasteryPoints={this.props.updateMasteryPoints}
                  incrementMasteryPoints={this.props.incrementMasteryPoints}
                  decrementMasteryPoints={this.props.decrementMasteryPoints}
                  incrementPathMeter={this.props.incrementPathMeter}
                  decrementPathMeter={this.props.decrementPathMeter}
                  abilities={this.props.abilities}
                  selectedMasteries={this.props.selectedMasteries}
                  updateSelectedMasteries={this.props.updateSelectedMasteries}
                  updateSelectedTactics={this.props.updateSelectedTactics}
                  updateSelectedMorale={this.props.updateSelectedMorale}
                  updateCoreTactics={this.props.updateCoreTactics}
                  updateCoreMorales={this.props.updateCoreMorales}
                />
              </div>

              <div className="marginLeft@md-min">
                <ActionButtons
                  resetCareer={this.props.resetCareer}
                  careerSlug={this.props.careerSlug}
                  currentLevel={this.props.currentLevel}
                  currentRenown={this.props.currentRenown}
                  currentTacticLimit={this.props.currentTacticLimit}
                  masteryPoints={this.props.masteryPoints}
                  pathAMeter={this.props.pathAMeter}
                  pathBMeter={this.props.pathBMeter}
                  pathCMeter={this.props.pathCMeter}
                  selectedMorale1={this.props.selectedMorale1}
                  selectedMorale2={this.props.selectedMorale2}
                  selectedMorale3={this.props.selectedMorale3}
                  selectedMorale4={this.props.selectedMorale4}
                  selectedMasteries={this.props.selectedMasteries}
                  selectedTactics={this.props.selectedTactics}
                  updateModalVisibility={this.props.updateModalVisibility}
                  updateModalContent={this.props.updateModalContent}
                  career={this.props.career}
                  updateSidebarVisibility={this.props.updateSidebarVisibility}
                  updateOverlayVisibility={this.props.updateOverlayVisibility}
                  gaCareerShared={this.props.gaCareerShared}
                  gaChangeCareer={this.props.gaChangeCareer}
                />
              </div>

            </div>
          </div>

          <Modal
            modal={this.props.modal}
            updateModalVisibility={this.props.updateModalVisibility}
            updateOverlayVisibility={this.props.updateOverlayVisibility}
          />
        </div>
      );
    }
  }

  render() {
    const containerClass = classNames({
      [css.wrapper]: !this.props.sidebar.visible,
      [css.wrapperSidebar]: this.props.sidebar.visible,
    });
    if (this.props.careerLoading) {
      return (
        <div className="heightFull">

          <div className={containerClass}>

            {this.renderContent()}

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
    return (
      <div className="heightFull">

        <div className={containerClass}>

          {this.renderContent()}

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
  gaCareerShared: React.PropTypes.func,
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
  currentLevel: React.PropTypes.number,
  currentRenown: React.PropTypes.number,
  updateLevel: React.PropTypes.func,
  updateRenown: React.PropTypes.func,
  resetSelections: React.PropTypes.func,
  updateMasteryPoints: React.PropTypes.func,
  updateCurrentTacticLimit: React.PropTypes.func,
  selectedMorale1: React.PropTypes.number,
  selectedMorale2: React.PropTypes.number,
  selectedMorale3: React.PropTypes.number,
  selectedMorale4: React.PropTypes.number,
  updateSelectedMorale: React.PropTypes.func,
  selectedTactics: React.PropTypes.array,
  currentTacticLimit: React.PropTypes.number,
  updateSelectedTactics: React.PropTypes.func,
  masteryPoints: React.PropTypes.number,
  pathAMeter: React.PropTypes.number,
  pathBMeter: React.PropTypes.number,
  pathCMeter: React.PropTypes.number,
  incrementMasteryPoints: React.PropTypes.func,
  decrementMasteryPoints: React.PropTypes.func,
  selectedMasteries: React.PropTypes.array,
  updateCoreTactics: React.PropTypes.func,
  updateCoreMorales: React.PropTypes.func,
  incrementPathMeter: React.PropTypes.func,
  decrementPathMeter: React.PropTypes.func,
  updateSelectedMasteries: React.PropTypes.func,
  resetCareer: React.PropTypes.func,
  updateModalContent: React.PropTypes.func,
  updateModalVisibility: React.PropTypes.func,
  modal: React.PropTypes.object,
};

export default Career;
