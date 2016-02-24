import React from 'react';
import Ability from './Ability';
import PathMeter from './PathMeter';
import PathMeterButtons from './PathMeterButtons';

class Mastery extends React.Component {

  renderAbility(obj) {
    return (
      <Ability key={obj.id}
        details={obj}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
        selectedAbilities={this.props.selectedAbilities} />
      )
  }

  render() {
    return (
      <div className="mastery-container">
        <h2>Mastery Abilities</h2>

        <p>Mastery points: <strong>{this.props.masteryPoints}</strong></p>

        <div className="path-a">
          <h3>{this.props.career.paths.a.name}</h3>
          <h4>Optional Abilities</h4>
          <PathMeter masteryPoints={this.props.masteryPoints}
            updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
            currentLevel={this.props.currentLevel}
            pathOptionalAbilities={this.props.pathAOptionalAbilities}
            pathMeter={this.props.pathAMeter}
            setUserSelectionMorale={this.props.setUserSelectionMorale.bind(this)}
            userSelections={this.props.userSelections}
            setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
            selectedAbilities={this.props.selectedAbilities}
            currentTacticLimit={this.props.currentTacticLimit}
            setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
            setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities.bind(this)}
            masteryPath="a" />
          <PathMeterButtons masteryPath="a"
            masteryPoints={this.props.masteryPoints}
            pathMeter={this.props.pathAMeter}
            updatePathMeter={this.props.updatePathMeter.bind(this)}
          updateMasteryPoints={this.props.updateMasteryPoints.bind(this)} />
          <h4>Core Abilities</h4>
          <div className="core-abilities">
            {this.props.pathACoreAbilities.map(this.renderAbility.bind(this))}
          </div>
        </div>
        <div className="path-b">
          <h3>{this.props.career.paths.b.name}</h3>
          <h4>Optional Abilities</h4>
          <PathMeter masteryPoints={this.props.masteryPoints}
            updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
            currentLevel={this.props.currentLevel}
            pathOptionalAbilities={this.props.pathBOptionalAbilities}
            pathMeter={this.props.pathBMeter}
            setUserSelectionMorale={this.props.setUserSelectionMorale.bind(this)}
            userSelections={this.props.userSelections}
            setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
            selectedAbilities={this.props.selectedAbilities}
            currentTacticLimit={this.props.currentTacticLimit}
            setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
            setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities.bind(this)}
            masteryPath="b" />
          <PathMeterButtons masteryPath="b"
            masteryPoints={this.props.masteryPoints}
            pathMeter={this.props.pathBMeter}
            updatePathMeter={this.props.updatePathMeter.bind(this)}
          updateMasteryPoints={this.props.updateMasteryPoints.bind(this)} />
          <h4>Core Abilities</h4>
          <div className="core-abilities">
            {this.props.pathBCoreAbilities.map(this.renderAbility.bind(this))}
          </div>
        </div>
        <div className="path-c">
          <h3>{this.props.career.paths.c.name}</h3>
          <h4>Optional Abilities</h4>
          <PathMeter masteryPoints={this.props.masteryPoints}
            updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
            currentLevel={this.props.currentLevel}
            pathOptionalAbilities={this.props.pathCOptionalAbilities}
            pathMeter={this.props.pathCMeter}
            setUserSelectionMorale={this.props.setUserSelectionMorale.bind(this)}
            userSelections={this.props.userSelections}
            setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
            selectedAbilities={this.props.selectedAbilities}
            currentTacticLimit={this.props.currentTacticLimit}
            setUserSelectionTactic={this.props.setUserSelectionTactic.bind(this)}
            setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities.bind(this)}
            masteryPath="c" />
          <PathMeterButtons masteryPath="c"
            masteryPoints={this.props.masteryPoints}
            pathMeter={this.props.pathCMeter}
            updatePathMeter={this.props.updatePathMeter.bind(this)}
            updateMasteryPoints={this.props.updateMasteryPoints.bind(this)} />
          <h4>Core Abilities</h4>
          <div className="core-abilities">
            {this.props.pathCCoreAbilities.map(this.renderAbility.bind(this))}
          </div>
        </div>
      </div>
    )
  }

}

export default Mastery;
