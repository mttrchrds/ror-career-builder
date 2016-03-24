import React from 'react';
import Ability from './Ability';

require('../../scss/CoreMorales.scss');

class CoreMorales extends React.Component {

  renderAbility(key, rank) {
    return (
      <Ability key={this.props.morales[key].id}
        details={this.props.morales[key]}
        currentLevel={this.props.currentLevel}
        setUserSelectionMorale={this.props.setUserSelectionMorale.bind(this)}
        userSelections={this.props.userSelections}
        moraleRank={rank}
        setSelectedAbilities={this.props.setSelectedAbilities.bind(this)}
        selectedAbilities={this.props.selectedAbilities}
        updateMasteryPoints={this.props.updateMasteryPoints.bind(this)}
        masteryPoints={this.props.masteryPoints} />
      )
  }

  renderMorales(rank1, rank2, rank3, rank4) {
    return (
      <div className="l-core-morales">
        <div className="c-morale c-morale--1">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 1</h3>
          <div className="c-morale__abilities">
            {rank1.map((obj) => {
              return (this.renderAbility(obj, 1))
            })}
          </div>
          
        </div>
        <div className="c-morale c-morale--2">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 2</h3>
          <div className="c-morale__abilities">
            {rank2.map((obj) => {
              return (this.renderAbility(obj, 2))
             })}
          </div>
        </div>
        <div className="c-morale c-morale--3">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 3</h3>
          <div className="c-morale__abilities">
            {rank3.map((obj) => {
              return (this.renderAbility(obj, 3))
            })}
          </div>
        </div>
        <div className="c-morale c-morale--4">
          <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 4</h3>
          <div className="c-morale__abilities">
            {rank4.map((obj) => {
              return (this.renderAbility(obj, 4))
            })}
          </div>
        </div>
      </div>
    )
  }

  sortMorales() {
    let rank1 = [], rank2 = [], rank3 = [], rank4 =[];
    for (let morale_key in this.props.morales) {
      switch (this.props.morales[morale_key].cost) {
        case "Rank 1 morale":
          rank1.push(morale_key);
          break;
        case "Rank 2 morale":
          rank2.push(morale_key);
          break;
        case "Rank 3 morale":
          rank3.push(morale_key);
          break;
        case "Rank 4 morale":
          rank4.push(morale_key);
          break;
      }
    }
    return this.renderMorales(rank1, rank2, rank3, rank4);
  }

  render() {
    return (
      <div className="l-morales">
        <div className="l-box">
          <h2 className="c-ability-title t-secondary t-secondary__title">Core morales</h2>
          {this.sortMorales()}
        </div>
      </div>
    )
  }
}

export default CoreMorales;
