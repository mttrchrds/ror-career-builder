import React from 'react';
import Ability from './Ability';
import css from '../../css/components/CoreAbilities.css';

const CoreAbilities = (props) => {
  const renderAbility = (key) =>
    <Ability
      key={props.abilities[key].id}
      details={props.abilities[key]}
      currentLevel={props.currentLevel}
    />;
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Core abilities</h2>
      <div className="row">
        {props.coreAbilities.map(renderAbility)}
      </div>
    </div>
  );
};

CoreAbilities.propTypes = {
  abilities: React.PropTypes.object,
  coreAbilities: React.PropTypes.array,
  currentLevel: React.PropTypes.number,
};

export default CoreAbilities;
