import React from 'react';
import AbilityTactic from './AbilityTactic';
import css from '../../css/components/CoreTactics.css';

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
    <div className={css.container}>
      <h2 className={css.heading}>Tactics</h2>
      <div className={css.abilities}>
        {props.tactics.map(renderAbility)}
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
