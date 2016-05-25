import React from 'react';
import AbilityMastery from './AbilityMastery';

const moraleRank = 4;

const PathMeter = (props) =>
  <div>
    <div className="o-column u-margin__left--small">
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl7}
          setUserSelectionMorale={props.setUserSelectionMorale}
          userSelections={props.userSelections}
          moraleRank={moraleRank}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          masteryPath={props.masteryPath}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl6}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          setUserSelectionMasteryAbilities={props.setUserSelectionMasteryAbilities}
          userSelections={props.userSelections}
          masteryPath={props.masteryPath}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl5}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          currentTacticLimit={props.currentTacticLimit}
          setUserSelectionTactic={props.setUserSelectionTactic}
          userSelections={props.userSelections}
          masteryPath={props.masteryPath}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery 
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl4}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          setUserSelectionMasteryAbilities={props.setUserSelectionMasteryAbilities}
          userSelections={props.userSelections}
          masteryPath={props.masteryPath}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl3}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          currentTacticLimit={props.currentTacticLimit}
          setUserSelectionTactic={props.setUserSelectionTactic}
          userSelections={props.userSelections}
          masteryPath={props.masteryPath}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl2}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          setUserSelectionMasteryAbilities={props.setUserSelectionMasteryAbilities}
          userSelections={props.userSelections}
          masteryPath={props.masteryPath}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.pathOptionalAbilities.lvl1}
          setSelectedAbilities={props.setSelectedAbilities}
          selectedAbilities={props.selectedAbilities}
          currentTacticLimit={props.currentTacticLimit}
          setUserSelectionTactic={props.setUserSelectionTactic}
          userSelections={props.userSelections}
          masteryPath={props.masteryPath}
        />
      </div>
    </div>
  </div>;

PathMeter.propTypes = {
  pathMeter: React.PropTypes.number,
  pathOptionalAbilities: React.PropTypes.obj,
  masteryPoints: React.PropTypes.number,
  updateMasteryPoints: React.PropTypes.func,
  setSelectedAbilities: React.PropTypes.func,
  selectedAbilities: React.PropTypes.array,
  currentTacticLimit: React.PropTypes.number,
  setUserSelectionTactic: React.PropTypes.func,
  userSelections: React.PropTypes.array,
  masteryPath: React.PropTypes.string,
  setUserSelectionMasteryAbilities: React.PropTypes.func,
  setUserSelectionMorale: React.PropTypes.func,
};

export default PathMeter;
