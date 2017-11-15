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
      <div className="row">
        {props.coreTactics.map(renderAbility)}
      </div>
    </div>
  );
};

export default CoreTactics;
