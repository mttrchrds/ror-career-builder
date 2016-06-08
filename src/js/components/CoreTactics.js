import React from 'react';
import AbilityTactic from './AbilityTactic';

const CoreTactics = (props) => {
  const renderAbility = (key) => 
    <AbilityTactic 
      key={`t${props.abilities[key].id}`}
      details={props.abilities[key]}
      currentLevel={props.currentLevel}
      currentTacticLimit={props.currentTacticLimit}
      selectedTactics={props.selectedTactics}
      updateSelectedTactics={props.updateSelectedTactics}
    />;
  return (
    <div className="u-margin__bottom">
      <div className="c-box">
        <h2 className="c-page-title">Tactics</h2>
        <div className="o-row">
          {props.tactics.map(renderAbility)}
        </div>
      </div>
    </div>
  );
};

CoreTactics.propTypes = {
  abilities: React.PropTypes.object,
  tactics: React.PropTypes.array,
  currentLevel: React.PropTypes.number,
  currentTacticLimit: React.PropTypes.number,
  selectedTactics: React.PropTypes.array,
  updateSelectedTactics: React.PropTypes.func,
};

export default CoreTactics;
