import React from 'react';
import AbilityMorale from './AbilityMorale';
import '../../scss/components/CoreMorales.scss';
import css from '../../css/components/CoreMorales.css';

const CoreMorales = (props) => {
  const renderAbility = (ability, rank) =>
    <AbilityMorale
      key={`m${ability.id}`}
      details={ability}
      currentLevel={props.currentLevel}
      moraleRank={rank}
      updateSelectedMorale={props.updateSelectedMorale}
      selectedMorale1={props.selectedMorale1}
      selectedMorale2={props.selectedMorale2}
      selectedMorale3={props.selectedMorale3}
      selectedMorale4={props.selectedMorale4}
    />;
  const renderMorales = (rank1, rank2, rank3, rank4) =>
    <div className={css.moraleContainer}>
      <div className={css.moraleFirst}>
        <h3 className={css.moraleHeading}>Rank 1</h3>
        <div className={css.abilities}>
          {rank1.map(
            (key) => renderAbility(props.abilities[key], 1)
          )}
        </div>
      </div>
      <div className={css.morale}>
        <h3 className={css.moraleHeading}>Rank 2</h3>
        <div className={css.abilities}>
          {rank2.map(
            (key) => renderAbility(props.abilities[key], 2)
          )}
        </div>
      </div>
      <div className={css.morale}>
        <h3 className={css.moraleHeading}>Rank 3</h3>
        <div className={css.abilities}>
          {rank3.map(
            (key) => renderAbility(props.abilities[key], 3)
          )}
        </div>
      </div>
      <div className={css.moraleLast}>
        <h3 className={css.moraleHeading}>Rank 4</h3>
        <div className={css.abilities}>
          {rank4.map(
            (key) => renderAbility(props.abilities[key], 4)
          )}
        </div>
      </div>
    </div>;
  const sortMorales = () => {
    const rank1 = [];
    const rank2 = [];
    const rank3 = [];
    const rank4 = [];
    for (const moraleKey in props.morales) {
      if ({}.hasOwnProperty.call(props.morales, moraleKey)) {
        switch (props.abilities[props.morales[moraleKey]].cost) {
          case 'Rank 1 morale':
            rank1.push(props.abilities[props.morales[moraleKey]].id);
            break;
          case 'Rank 2 morale':
            rank2.push(props.abilities[props.morales[moraleKey]].id);
            break;
          case 'Rank 3 morale':
            rank3.push(props.abilities[props.morales[moraleKey]].id);
            break;
          case 'Rank 4 morale':
            rank4.push(props.abilities[props.morales[moraleKey]].id);
            break;
          default :
            break;
        }
      }
    }
    return renderMorales(rank1, rank2, rank3, rank4);
  };
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Morales</h2>
      {sortMorales()}
    </div>
  );
};

CoreMorales.propTypes = {
  morales: React.PropTypes.array,
  abilities: React.PropTypes.object,
  currentLevel: React.PropTypes.number,
  selectedMorale1: React.PropTypes.number,
  selectedMorale2: React.PropTypes.number,
  selectedMorale3: React.PropTypes.number,
  selectedMorale4: React.PropTypes.number,
  updateSelectedMorale: React.PropTypes.func,
};

export default CoreMorales;
