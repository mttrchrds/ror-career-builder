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
      <div className="l-box l-box--no-padding-right l-spacing-left">
        <h2 className="l-page-title">
          Mastery abilities <span className="red">{this.props.masteryPoints} points</span>
        </h2>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <div className="l-border-right l-spacing-right">
              <h3 className="l-page-title l-page-title--compact">{this.props.career.paths.a.name}</h3>
              <div className="l-row l-row--space-between">
                <div className="l-row l-row--space-between">
                  <PathMeterButtons masteryPath="a"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathAMeter}
                    updatePathMeter={this.props.updatePathMeter.bind(this)}
                    updateMasteryPoints={this.props.updateMasteryPoints.bind(this)} />
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
                </div>
                <div className="l-spacing-right">
                  <div className="l-column">
                    <h4 className="l-spacing-bottom--small">Core<br/>abilities</h4>
                    {this.props.pathACoreAbilities.map(this.renderAbility.bind(this))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-u-1-3">
            <div className="l-border-right l-spacing-right">
              <h3 className="l-page-title l-page-title--compact">{this.props.career.paths.b.name}</h3>
              <div className="l-row l-row--space-between">
                <div className="l-row l-row--space-between">
                  <PathMeterButtons masteryPath="b"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathBMeter}
                    updatePathMeter={this.props.updatePathMeter.bind(this)}
                    updateMasteryPoints={this.props.updateMasteryPoints.bind(this)} />
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
                </div>
                <div className="l-spacing-right">
                  <div className="l-column">
                    <h4 className="l-spacing-bottom--small">Core<br/>abilities</h4>
                    {this.props.pathBCoreAbilities.map(this.renderAbility.bind(this))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-u-1-3">
            <div className="l-spacing-right">
              <h3 className="l-page-title l-page-title--compact">{this.props.career.paths.c.name}</h3>
              <div className="l-row l-row--space-between">
                <div className="l-row l-row--space-between">
                  <PathMeterButtons masteryPath="c"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathCMeter}
                    updatePathMeter={this.props.updatePathMeter.bind(this)}
                    updateMasteryPoints={this.props.updateMasteryPoints.bind(this)} />
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
                </div>
                <div className="l-spacing-right">
                  <div className="l-column">
                    <h4 className="l-spacing-bottom--small">Core<br/>abilities</h4>  
                    {this.props.pathCCoreAbilities.map(this.renderAbility.bind(this))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Mastery;
