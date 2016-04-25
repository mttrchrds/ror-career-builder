import React from 'react';
import Ability from './AbilityMastery';

class PathMeter extends React.Component {

  render() {
    const moraleRank = 4;
    return (
      <div>
        <div className="l-column l-spacing-left--small">
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl7}
              currentLevel={this.props.currentLevel}
              setUserSelectionMorale={this.props.setUserSelectionMorale}
              userSelections={this.props.userSelections}
              moraleRank={moraleRank}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl6}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl5}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl4}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl3}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl2}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl1}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
        </div>
      </div>
    )
  }

}

export default PathMeter;
