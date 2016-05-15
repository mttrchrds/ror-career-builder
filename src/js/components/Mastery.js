import React from 'react';
import Ability from './Ability';
import PathMeter from './PathMeter';
import PathMeterButtons from './PathMeterButtons';
import classNames from 'classnames';

class Mastery extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderAbility = this.renderAbility.bind(this);
    this.renderOverflow = this.renderOverflow.bind(this);
  }

  renderAbility(obj) {
    return (
      <Ability key={obj.id}
        details={obj}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities}
        selectedAbilities={this.props.selectedAbilities} />
      )
  }

  renderOverflow(overflow) {
    if (overflow.length > 0) {
      return (
        <div className="l-col">{overflow.map(this.renderAbility)}</div>
      );
    }
  }

  render() {
    let labelClass = classNames({
      'c-label': true,
      'l-spacing-left--small': true,
      'c-label--points': this.props.masteryPoints > 0,
    });
    return (
      <div className="l-box l-box--no-padding-right l-spacing-left l-spacing-bottom">
        <h2 className="l-page-title">
          Mastery abilities <span className={labelClass}>{this.props.masteryPoints} points</span>
        </h2>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <div className="l-border-right l-spacing-right">
              <h3 className="l-page-title l-page-title--compact">{this.props.career.paths.a.name}</h3>
              <div className="l-row l-row--justify">
                <div className="l-row l-row--justify">
                  <PathMeterButtons 
                    masteryPath="a"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathAMeter}
                    incrementMasteryPoints={this.props.incrementMasteryPoints}
                    decrementMasteryPoints={this.props.decrementMasteryPoints}
                    incrementPathMeter={this.props.incrementPathMeter}
                    decrementPathMeter={this.props.decrementPathMeter}
                  />
                  <PathMeter masteryPoints={this.props.masteryPoints}
                    updateMasteryPoints={this.props.updateMasteryPoints}
                    currentLevel={this.props.currentLevel}
                    pathOptionalAbilities={this.props.pathAOptionalAbilities}
                    pathMeter={this.props.pathAMeter}
                    setUserSelectionMorale={this.props.setUserSelectionMorale}
                    userSelections={this.props.userSelections}
                    setSelectedAbilities={this.props.setSelectedAbilities}
                    selectedAbilities={this.props.selectedAbilities}
                    currentTacticLimit={this.props.currentTacticLimit}
                    setUserSelectionTactic={this.props.setUserSelectionTactic}
                    setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
                    masteryPath="a" />
                </div>
                <div className="l-spacing-right">
                  <h4 className="l-spacing-top l-spacing-bottom--small">Core<br/>abilities</h4>
                  <div className="l-row">
                    <div className="l-col">{this.props.pathACoreAbilities.map(this.renderAbility)}</div>
                    {this.renderOverflow(this.props.pathACoreOverflow)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-u-1-3">
            <div className="l-border-right l-spacing-right">
              <h3 className="l-page-title l-page-title--compact">{this.props.career.paths.b.name}</h3>
              <div className="l-row l-row--justify">
                <div className="l-row l-row--justify">
                  <PathMeterButtons 
                    masteryPath="b"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathBMeter}
                    incrementMasteryPoints={this.props.incrementMasteryPoints}
                    decrementMasteryPoints={this.props.decrementMasteryPoints}
                    incrementPathMeter={this.props.incrementPathMeter}
                    decrementPathMeter={this.props.decrementPathMeter}
                  />
                  <PathMeter masteryPoints={this.props.masteryPoints}
                    updateMasteryPoints={this.props.updateMasteryPoints}
                    currentLevel={this.props.currentLevel}
                    pathOptionalAbilities={this.props.pathBOptionalAbilities}
                    pathMeter={this.props.pathBMeter}
                    setUserSelectionMorale={this.props.setUserSelectionMorale}
                    userSelections={this.props.userSelections}
                    setSelectedAbilities={this.props.setSelectedAbilities}
                    selectedAbilities={this.props.selectedAbilities}
                    currentTacticLimit={this.props.currentTacticLimit}
                    setUserSelectionTactic={this.props.setUserSelectionTactic}
                    setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
                    masteryPath="b" />
                </div>
                <div className="l-spacing-right">
                  <h4 className="l-spacing-top l-spacing-bottom--small">Core<br/>abilities</h4>
                  <div className="l-row">
                    <div className="l-col">{this.props.pathBCoreAbilities.map(this.renderAbility)}</div>
                    {this.renderOverflow(this.props.pathBCoreOverflow)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-u-1-3">
            <div className="l-spacing-right">
              <h3 className="l-page-title l-page-title--compact">{this.props.career.paths.c.name}</h3>
              <div className="l-row l-row--justify">
                <div className="l-row l-row--justify">
                  <PathMeterButtons 
                    masteryPath="c"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathCMeter}
                    incrementMasteryPoints={this.props.incrementMasteryPoints}
                    decrementMasteryPoints={this.props.decrementMasteryPoints}
                    incrementPathMeter={this.props.incrementPathMeter}
                    decrementPathMeter={this.props.decrementPathMeter}
                  />
                  <PathMeter masteryPoints={this.props.masteryPoints}
                    updateMasteryPoints={this.props.updateMasteryPoints}
                    currentLevel={this.props.currentLevel}
                    pathOptionalAbilities={this.props.pathCOptionalAbilities}
                    pathMeter={this.props.pathCMeter}
                    setUserSelectionMorale={this.props.setUserSelectionMorale}
                    userSelections={this.props.userSelections}
                    setSelectedAbilities={this.props.setSelectedAbilities}
                    selectedAbilities={this.props.selectedAbilities}
                    currentTacticLimit={this.props.currentTacticLimit}
                    setUserSelectionTactic={this.props.setUserSelectionTactic}
                    setUserSelectionMasteryAbilities={this.props.setUserSelectionMasteryAbilities}
                    masteryPath="c" />
                </div>
                <div className="l-spacing-right">
                  <h4 className="l-spacing-top l-spacing-bottom--small">Core<br/>abilities</h4>
                  <div className="l-row">
                    <div className="l-col">{this.props.pathCCoreAbilities.map(this.renderAbility)}</div>
                    {this.renderOverflow(this.props.pathCCoreOverflow)}
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
