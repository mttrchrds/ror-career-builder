import React from 'react';
import AbilityMorale from './AbilityMorale';
import '../../scss/components/CoreMorales.scss';

class CoreMorales extends React.Component {

  renderAbility(key, rank) {
    return (
      <AbilityMorale key={this.props.morales[key].id}
        details={this.props.morales[key]}
        currentLevel={this.props.currentLevel}
        setUserSelectionMorale={this.props.setUserSelectionMorale}
        userSelections={this.props.userSelections}
        moraleRank={rank}
        setSelectedAbilities={this.props.setSelectedAbilities}
        selectedAbilities={this.props.selectedAbilities}
        incrementMasteryPoints={this.props.incrementMasteryPoints}
      />
    );
  }

  renderMorales(rank1, rank2, rank3, rank4) {
    return (
      <div className="o-row u-display__block-mobile">
        <div className="c-morale c-morale--1">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 1</h3>
          <div className="c-morale__abilities">
            {rank1.map(
              (obj) => this.renderAbility(obj, 1)
            )}
          </div>
          
        </div>
        <div className="c-morale c-morale--2">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 2</h3>
          <div className="c-morale__abilities">
            {rank2.map(
              (obj) => this.renderAbility(obj, 2)
            )}
          </div>
        </div>
        <div className="c-morale c-morale--3">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 3</h3>
          <div className="c-morale__abilities">
            {rank3.map(
              (obj) => this.renderAbility(obj, 3)
            )}
          </div>
        </div>
        <div className="c-morale c-morale--4">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 4</h3>
          <div className="c-morale__abilities">
            {rank4.map(
              (obj) => this.renderAbility(obj, 4)
            )}
          </div>
        </div>
      </div>
    );
  }

  sortMorales() {
    const rank1 = [];
    const rank2 = [];
    const rank3 = [];
    const rank4 = [];
    for (const moraleKey in this.props.morales) {
      if ({}.hasOwnProperty.call(this.props.morales, moraleKey)) {
        switch (this.props.morales[moraleKey].cost) {
          case 'Rank 1 morale':
            rank1.push(moraleKey);
            break;
          case 'Rank 2 morale':
            rank2.push(moraleKey);
            break;
          case 'Rank 3 morale':
            rank3.push(moraleKey);
            break;
          case 'Rank 4 morale':
            rank4.push(moraleKey);
            break;
          default :
            break;
        }
      }
    }
    return this.renderMorales(rank1, rank2, rank3, rank4);
  }

  render() {
    return (
      <div className="u-margin__bottom">
        <div className="c-box">
          <h2 className="c-page-title">Core morales</h2>
          {this.sortMorales()}
        </div>
      </div>
    );
  }
}

CoreMorales.propTypes = {
  morales: React.PropTypes.array,
  currentLevel: React.PropTypes.number,
  setUserSelectionMorale: React.PropTypes.func,
  userSelections: React.PropTypes.object,
  setSelectedAbilities: React.PropTypes.func,
  selectedAbilities: React.PropTypes.array,
  incrementMasteryPoints: React.PropTypes.func,
};

export default CoreMorales;
