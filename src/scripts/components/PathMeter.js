import React from 'react';
import Ability from './Ability';

class PathMeter extends React.Component {

  render() {
    return (
      <div>
        <div className="optionalAbilities">
          <div className="level7">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl7}
              currentLevel={this.props.currentLevel}
              setUserSelectionMorale={this.props.setUserSelectionMorale.bind(this)}
              userSelections={this.props.userSelections}
              moraleRank='4'
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities} />
          </div>
          <div className="level6">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl6}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities.bind(this)}
              userSelections={this.props.userSelections} />
          </div>
          <div className="level5">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl5}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
              userSelections={this.props.userSelections} />
          </div>
          <div className="level4">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl4}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities.bind(this)}
              userSelections={this.props.userSelections} />
          </div>
          <div className="level3">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl3}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
              userSelections={this.props.userSelections} />
          </div>
          <div className="level2">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl2}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities}
              setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities.bind(this)}
              userSelections={this.props.userSelections} />
          </div>
          <div className="level1">
            <Ability pathMeter={this.props.pathMeter}
              masteryPoints={this.props.masteryPoints}
              updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
              details={this.props.pathOptionalAbilities.lvl1}
              currentLevel={this.props.currentLevel}
              setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
              selectedAbilities={this.props.selectedAbilities}
              currentTacticLimit={this.props.currentTacticLimit}
              setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
              userSelections={this.props.userSelections} />
          </div>
        </div>
        <p>Meter level = {this.props.pathMeter}</p>
        <p>Total remaining = {this.props.masteryPoints}</p>
      </div>
    )
  }

}

export default PathMeter;
