import React from 'react';
import Ability from './Ability';

const CoreAbilities = (props) => {
  const renderAbility = (key) =>
    <Ability
      key={key} details={props.abilities[key]}
      currentLevel={props.currentLevel}
      setSelectedAbilities={props.setSelectedAbilities}
      selectedAbilities={props.selectedAbilities}
      userSelections={props.userSelections}
    />;
  return (
    <div className="u-margin__bottom">
      <div className="c-box">
        <h2 className="c-page-title">Core abilities</h2>
        <div className="o-row">
          {Object.keys(props.abilities).map(renderAbility)}
        </div>
      </div>
    </div>
  );
};

CoreAbilities.propTypes = {
  abilities: React.PropTypes.array,
  currentLevel: React.PropTypes.number,
  userSelections: React.PropTypes.object,
  setSelectedAbilities: React.PropTypes.func,
  selectedAbilities: React.PropTypes.array,
};

export default CoreAbilities;
