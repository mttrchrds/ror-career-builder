import React from 'react';
import AbilityMastery from './AbilityMastery';

const PathMeter = (props) =>
  <div>
    <div className="o-column u-margin__left--small">
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl7]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl6]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl5]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery 
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl4]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl3]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl2]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className="u-margin__bottom--tiny">
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          updateMasteryPoints={props.updateMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl1]}
          masteryPath={props.masteryPath}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
    </div>
  </div>;

PathMeter.propTypes = {
  abilities: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  pathOptionalAbilities: React.PropTypes.object,
  masteryPoints: React.PropTypes.number,
  updateMasteryPoints: React.PropTypes.func,
  masteryPath: React.PropTypes.string,
  selectedMasteries: React.PropTypes.array,
  updateSelectedMasteries: React.PropTypes.func,
  updateSelectedTactics: React.PropTypes.func,
  updateSelectedMorale: React.PropTypes.func,
  updateCoreTactics: React.PropTypes.func,
  updateCoreMorales: React.PropTypes.func,
};

export default PathMeter;
