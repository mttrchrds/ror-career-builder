import React from 'react';
import Ability from './Ability';
import PathMeter from './PathMeter';
import PathMeterButtons from './PathMeterButtons';
import classNames from 'classnames';

const Mastery = (props) => {
  const renderAbility = (key) =>
    <Ability 
      key={props.abilities[key].id}
      details={props.abilities[key]}
      currentLevel={props.currentLevel}
      setSelectedAbilities={props.setSelectedAbilities}
      selectedAbilities={props.selectedAbilities}
    />;
  const renderOverflow = (overflow) => {
    if (overflow.length > 0) {
      return (
        <div className="l-col">{overflow.map(renderAbility)}</div>
      );
    }
    return false;
  };
  const labelClass = classNames({
    'c-label': true,
    'u-margin__left--small': true,
    'c-label--points': props.masteryPoints > 0,
  });
  return (
    <div className="c-box c-box--no-padding-right u-margin__left-md u-margin__bottom">
      <h2 className="c-page-title">
        Mastery abilities <span className={labelClass}>{props.masteryPoints} points</span>
      </h2>
      <div className="pure-g">
        <div className="pure-u-1-2 pure-u-mobile-1 pure-u-sm-1-3">
          <div className="u-border__right u-border__right-mobile--none u-border__right-sm u-margin__right u-border__bottom-mobile u-padding__bottom-mobile">
            <h3 className="c-page-title c-page-title--compact">{props.career.paths.a.name}</h3>
            <div className="o-row o-row--justify">
              <div className="o-row o-row--justify">
                <PathMeterButtons 
                  masteryPath="a"
                  masteryPoints={props.masteryPoints}
                  pathMeter={props.pathAMeter}
                  incrementMasteryPoints={props.incrementMasteryPoints}
                  decrementMasteryPoints={props.decrementMasteryPoints}
                  incrementPathMeter={props.incrementPathMeter}
                  decrementPathMeter={props.decrementPathMeter}
                />
                <PathMeter 
                  masteryPoints={props.masteryPoints}
                  updateMasteryPoints={props.updateMasteryPoints}
                  currentLevel={props.currentLevel}
                  pathOptionalAbilities={props.pathAOptionalAbilities}
                  pathMeter={props.pathAMeter}
                  setUserSelectionMorale={props.setUserSelectionMorale}
                  userSelections={props.userSelections}
                  setSelectedAbilities={props.setSelectedAbilities}
                  selectedAbilities={props.selectedAbilities}
                  currentTacticLimit={props.currentTacticLimit}
                  setUserSelectionTactic={props.setUserSelectionTactic}
                  setUserSelectionMasteryAbilities={props.setUserSelectionMasteryAbilities}
                  masteryPath="a"
                  abilities={props.abilities}
                />
              </div>
              <div className="u-margin__right u-margin__right-mobile--large">
                <h4 className="u-margin__top u-margin__bottom--small">
                  Core<br />abilities
                </h4>
                <div className="o-row">
                  <div className="l-col">{props.pathACoreAbilities.map(renderAbility)}</div>
                  {renderOverflow(props.pathACoreOverflow)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pure-u-1-2 pure-u-mobile-1 pure-u-sm-1-3">
          <div className="u-border__right-sm u-margin__right u-margin__top u-margin__top-sm--none u-border__bottom-mobile u-padding__bottom-mobile">
            <h3 className="c-page-title c-page-title--compact">{props.career.paths.b.name}</h3>
            <div className="o-row o-row--justify">
              <div className="o-row o-row--justify">
                <PathMeterButtons 
                  masteryPath="b"
                  masteryPoints={props.masteryPoints}
                  pathMeter={props.pathBMeter}
                  incrementMasteryPoints={props.incrementMasteryPoints}
                  decrementMasteryPoints={props.decrementMasteryPoints}
                  incrementPathMeter={props.incrementPathMeter}
                  decrementPathMeter={props.decrementPathMeter}
                />
                <PathMeter
                  masteryPoints={props.masteryPoints}
                  updateMasteryPoints={props.updateMasteryPoints}
                  currentLevel={props.currentLevel}
                  pathOptionalAbilities={props.pathBOptionalAbilities}
                  pathMeter={props.pathBMeter}
                  setUserSelectionMorale={props.setUserSelectionMorale}
                  userSelections={props.userSelections}
                  setSelectedAbilities={props.setSelectedAbilities}
                  selectedAbilities={props.selectedAbilities}
                  currentTacticLimit={props.currentTacticLimit}
                  setUserSelectionTactic={props.setUserSelectionTactic}
                  setUserSelectionMasteryAbilities={props.setUserSelectionMasteryAbilities}
                  masteryPath="b"
                  abilities={props.abilities}
                />
              </div>
              <div className="u-margin__right u-margin__right-mobile--large">
                <h4 className="u-margin__top u-margin__bottom--small">
                  Core<br />abilities
                </h4>
                <div className="o-row">
                  <div className="l-col">{props.pathBCoreAbilities.map(renderAbility)}</div>
                  {renderOverflow(props.pathBCoreOverflow)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pure-u-1-2 pure-u-mobile-1 pure-u-sm-1-3">
          <div className="u-border__right u-border__right-mobile--none u-border__right-sm--none u-margin__right u-margin__top u-margin__top-sm--none">
            <h3 className="c-page-title c-page-title--compact">{props.career.paths.c.name}</h3>
            <div className="o-row o-row--justify">
              <div className="o-row o-row--justify">
                <PathMeterButtons 
                  masteryPath="c"
                  masteryPoints={props.masteryPoints}
                  pathMeter={props.pathCMeter}
                  incrementMasteryPoints={props.incrementMasteryPoints}
                  decrementMasteryPoints={props.decrementMasteryPoints}
                  incrementPathMeter={props.incrementPathMeter}
                  decrementPathMeter={props.decrementPathMeter}
                />
                <PathMeter 
                  masteryPoints={props.masteryPoints}
                  updateMasteryPoints={props.updateMasteryPoints}
                  currentLevel={props.currentLevel}
                  pathOptionalAbilities={props.pathCOptionalAbilities}
                  pathMeter={props.pathCMeter}
                  setUserSelectionMorale={props.setUserSelectionMorale}
                  userSelections={props.userSelections}
                  setSelectedAbilities={props.setSelectedAbilities}
                  selectedAbilities={props.selectedAbilities}
                  currentTacticLimit={props.currentTacticLimit}
                  setUserSelectionTactic={props.setUserSelectionTactic}
                  setUserSelectionMasteryAbilities={props.setUserSelectionMasteryAbilities}
                  masteryPath="c"
                  abilities={props.abilities}
                />
              </div>
              <div className="u-margin__right u-margin__right-mobile--large">
                <h4 className="u-margin__top u-margin__bottom--small">
                  Core<br />abilities
                </h4>
                <div className="o-row">
                  <div className="l-col">{props.pathCCoreAbilities.map(renderAbility)}</div>
                  {renderOverflow(props.pathCCoreOverflow)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  abilities: React.PropTypes.object,
};

export default Mastery;
