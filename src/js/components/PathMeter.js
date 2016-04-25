import React from 'react';
import AbilityMastery from './AbilityMastery';

class PathMeter extends React.Component {

  render() {
    const moraleRank = 4;
    return (
      <div>
        <div className="l-column l-spacing-left--small">
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl7}
              setUserSelectionMorale={this.props.setUserSelectionMorale}
              userSelections={this.props.userSelections}
              moraleRank={moraleRank}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl6}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl5}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl4}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl3}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl2}
              setSelectedAbilities={this.props.setSelectedAbilities}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
              userSelections={this.props.userSelections}
              masteryPath={this.props.masteryPath} />
          </div>
          <div className="l-spacing-bottom--tiny">
            <AbilityMastery pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints}
              details={this.props.pathOptionalAbilities.lvl1}
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
