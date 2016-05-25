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
      <Ability 
        key={obj.id}
        details={obj}
        currentLevel={this.props.currentLevel}
        setSelectedAbilities={this.props.setSelectedAbilities}
        selectedAbilities={this.props.selectedAbilities}
      />
    );
  }

  renderOverflow(overflow) {
    if (overflow.length > 0) {
      return (
        <div className="l-col">{overflow.map(this.renderAbility)}</div>
      );
    }
    return false;
  }

  render() {
    const labelClass = classNames({
      'c-label': true,
      'u-margin__left--small': true,
      'c-label--points': this.props.masteryPoints > 0,
    });
    return (
      <div className="c-box c-box--no-padding-right u-margin__left-md u-margin__bottom">
        <h2 className="c-page-title">
          Mastery abilities <span className={labelClass}>{this.props.masteryPoints} points</span>
        </h2>
        <div className="pure-g">
          <div className="pure-u-1-2 pure-u-mobile-1 pure-u-sm-1-3">
            <div className="u-border__right u-border__right-mobile--none u-border__right-sm u-margin__right u-border__bottom-mobile u-padding__bottom-mobile">
              <h3 className="c-page-title c-page-title--compact">{this.props.career.paths.a.name}</h3>
              <div className="o-row o-row--justify">
                <div className="o-row o-row--justify">
                  <PathMeterButtons 
                    masteryPath="a"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathAMeter}
                    incrementMasteryPoints={this.props.incrementMasteryPoints}
                    decrementMasteryPoints={this.props.decrementMasteryPoints}
                    incrementPathMeter={this.props.incrementPathMeter}
                    decrementPathMeter={this.props.decrementPathMeter}
                  />
                  <PathMeter 
                    masteryPoints={this.props.masteryPoints}
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
                    masteryPath="a"
                  />
                </div>
                <div className="u-margin__right u-margin__right-mobile--large">
                  <h4 className="u-margin__top u-margin__bottom--small">
                    Core<br />abilities
                  </h4>
                  <div className="o-row">
                    <div className="l-col">{this.props.pathACoreAbilities.map(this.renderAbility)}</div>
                    {this.renderOverflow(this.props.pathACoreOverflow)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-u-1-2 pure-u-mobile-1 pure-u-sm-1-3">
            <div className="u-border__right-sm u-margin__right u-margin__top u-margin__top-sm--none u-border__bottom-mobile u-padding__bottom-mobile">
              <h3 className="c-page-title c-page-title--compact">{this.props.career.paths.b.name}</h3>
              <div className="o-row o-row--justify">
                <div className="o-row o-row--justify">
                  <PathMeterButtons 
                    masteryPath="b"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathBMeter}
                    incrementMasteryPoints={this.props.incrementMasteryPoints}
                    decrementMasteryPoints={this.props.decrementMasteryPoints}
                    incrementPathMeter={this.props.incrementPathMeter}
                    decrementPathMeter={this.props.decrementPathMeter}
                  />
                  <PathMeter
                    masteryPoints={this.props.masteryPoints}
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
                    masteryPath="b"
                  />
                </div>
                <div className="u-margin__right u-margin__right-mobile--large">
                  <h4 className="u-margin__top u-margin__bottom--small">
                    Core<br />abilities
                  </h4>
                  <div className="o-row">
                    <div className="l-col">{this.props.pathBCoreAbilities.map(this.renderAbility)}</div>
                    {this.renderOverflow(this.props.pathBCoreOverflow)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-u-1-2 pure-u-mobile-1 pure-u-sm-1-3">
            <div className="u-border__right u-border__right-mobile--none u-border__right-sm--none u-margin__right u-margin__top u-margin__top-sm--none">
              <h3 className="c-page-title c-page-title--compact">{this.props.career.paths.c.name}</h3>
              <div className="o-row o-row--justify">
                <div className="o-row o-row--justify">
                  <PathMeterButtons 
                    masteryPath="c"
                    masteryPoints={this.props.masteryPoints}
                    pathMeter={this.props.pathCMeter}
                    incrementMasteryPoints={this.props.incrementMasteryPoints}
                    decrementMasteryPoints={this.props.decrementMasteryPoints}
                    incrementPathMeter={this.props.incrementPathMeter}
                    decrementPathMeter={this.props.decrementPathMeter}
                  />
                  <PathMeter 
                    masteryPoints={this.props.masteryPoints}
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
                    masteryPath="c"
                  />
                </div>
                <div className="u-margin__right u-margin__right-mobile--large">
                  <h4 className="u-margin__top u-margin__bottom--small">
                    Core<br />abilities
                  </h4>
                  <div className="o-row">
                    <div className="l-col">{this.props.pathCCoreAbilities.map(this.renderAbility)}</div>
                    {this.renderOverflow(this.props.pathCCoreOverflow)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Mastery.propTypes = {
  incrementPathMeter: React.PropTypes.func,
  decrementPathMeter: React.PropTypes.func,
  pathACoreAbilities: React.PropTypes.array,
  pathBCoreAbilities: React.PropTypes.array,
  pathCCoreAbilities: React.PropTypes.array,
  incrementMasteryPoints: React.PropTypes.func,
  decrementMasteryPoints: React.PropTypes.func,
  career: React.PropTypes.object,
  masteryPoints: React.PropTypes.number,
  updateMasteryPoints: React.PropTypes.func,
  currentLevel: React.PropTypes.number,
  pathAOptionalAbilities: React.PropTypes.object,
  pathBOptionalAbilities: React.PropTypes.object,
  pathCOptionalAbilities: React.PropTypes.object,
  pathAMeter: React.PropTypes.number,
  pathBMeter: React.PropTypes.number,
  pathCMeter: React.PropTypes.number,
  setUserSelectionMorale: React.PropTypes.func,
  userSelections: React.PropTypes.object,
  setSelectedAbilities: React.PropTypes.func,
  selectedAbilities: React.PropTypes.array,
  currentTacticLimit: React.PropTypes.number,
  setUserSelectionTactic: React.PropTypes.func,
  setUserSelectionMasteryAbilities: React.PropTypes.func,
  pathACoreOverflow: React.PropTypes.array,
  pathBCoreOverflow: React.PropTypes.array,
  pathCCoreOverflow: React.PropTypes.array,
};

export default Mastery;
