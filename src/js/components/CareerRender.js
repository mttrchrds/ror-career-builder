import React from 'react';
import Mastery from './Mastery';
import CoreAbilities from './CoreAbilities';
import CoreMorales from './CoreMorales';
import CoreTactics from './CoreTactics';
import CareerTitle from './CareerTitle';
import BarXp from './BarXp';
import BarRenown from './BarRenown';
import Breadcrumb from './Breadcrumb';
import SelectLevel from './SelectLevel';
import SelectRenown from './SelectRenown';
import ActionButtons from './ActionButtons';

class CareerRender extends React.Component {

  render() {
    return (
      <div className="paddingTop paddingRight paddingLeft paddingBottom">
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
                incrementMasteryPoints={this.props.incrementMasteryPoints}
                decrementMasteryPoints={this.props.decrementMasteryPoints}
                setMasteryPoints={this.props.setMasteryPoints}
                incrementPathMeter={this.props.incrementPathMeter}
                decrementPathMeter={this.props.decrementPathMeter}
                setPathMeter={this.props.setPathMeter}
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
                abilities={this.props.abilities}
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
                gaChangeCareer={this.props.gaChangeCareer}
              />
            </div>

          </div>
        </div>

        {/* <Modal
          modal={this.state.modal}
          updateModalVisibility={this.updateModalVisibility}
          updateOverlayVisibility={this.updateOverlayVisibility}
        /> */}
      </div>
      // TODO: Move above Modal out into App
    );
  }
}

export default CareerRender;
