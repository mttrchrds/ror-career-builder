import React from 'react';
import AbilityTactic from './AbilityTactic';

const CoreTactics = (props) => {
  const renderAbility = (key) => 
    <AbilityTactic 
      key={props.abilities[props.tactics[key]].id} 
      details={props.abilities[props.tactics[key]]}
      currentLevel={props.currentLevel}
      setSelectedAbilities={props.setSelectedAbilities}
      selectedAbilities={props.selectedAbilities}
      currentTacticLimit={props.currentTacticLimit}
      setUserSelectionTactic={props.setUserSelectionTactic}
      userSelections={props.userSelections}
    />;
  return (
    <div className="u-margin__bottom">
      <div className="c-box">
        <h2 className="c-page-title">Core tactics</h2>
        <div className="o-row">
          {Object.keys(props.tactics).map(renderAbility)}
        </div>
      </div>
    </div>
  );
};

CoreTactics.propTypes = {
  abilities: React.PropTypes.object,
  tactics: React.PropTypes.array,
  currentLevel: React.PropTypes.number,
  userSelections: React.PropTypes.object,
  setSelectedAbilities: React.PropTypes.func,
  selectedAbilities: React.PropTypes.array,
  currentTacticLimit: React.PropTypes.number,
  setUserSelectionTactic: React.PropTypes.func,
};

export default CoreTactics;
