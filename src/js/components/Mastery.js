import React from 'react';
import Ability from './Ability';
import PathMeter from './PathMeter';
import PathMeterButtons from './PathMeterButtons';

require('../../scss/Mastery.scss');

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
      <div className="l-mastery">
        <div className="l-box">
          <h2 className="c-ability-title t-secondary t-secondary__title">Mastery abilities <a className="ui label large red">{this.props.masteryPoints} points</a></h2>
          <div className="pure-g">
            <div className="pure-u-1-3">
              <div className="l-path-wrapper">
                <h3 className="c-path-title t-secondary t-secondary__subtitle">{this.props.career.paths.a.name}</h3>
                <div className="l-path-abilities">
                  <div className="l-path-abilities__optional">
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
                  <div className="l-path-abilities__core">
                    <div className="l-path-abilities__wrapper">
                      <p className="c-path-abilities-title t-secondary">Core<br/>abilities:</p>
                      {this.props.pathACoreAbilities.map(this.renderAbility.bind(this))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pure-u-1-3">
              <div className="l-path-wrapper">
                <h3 className="c-path-title t-secondary t-secondary__subtitle">{this.props.career.paths.b.name}</h3>
                <div className="l-path-abilities">
                  <div className="l-path-abilities__optional">
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
                  <div className="l-path-abilities__core">
                    <div className="l-path-abilities__wrapper">
                      <p className="c-path-abilities-title t-secondary">Core<br/>abilities:</p>
                      {this.props.pathBCoreAbilities.map(this.renderAbility.bind(this))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pure-u-1-3">
              <div className="l-path-wrapper l-path-wrapper--3">
                <h3 className="c-path-title t-secondary t-secondary__subtitle">{this.props.career.paths.c.name}</h3>
                <div className="l-path-abilities">
                  <div className="l-path-abilities__optional">
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
                  <div className="l-path-abilities__core">
                    <div className="l-path-abilities__wrapper">
                      <p className="c-path-abilities-title t-secondary">Core<br/>abilities:</p>  
                      {this.props.pathCCoreAbilities.map(this.renderAbility.bind(this))}
                    </div>
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
