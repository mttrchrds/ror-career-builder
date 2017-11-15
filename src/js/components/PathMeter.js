import React from 'react';
import AbilityMastery from './AbilityMastery';
import css from '../../css/components/PathMeter.css';

const PathMeter = (props) =>
  <div>
    <div className="column marginLeft--small">
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl7]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl6]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl5]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl4]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl3]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
        />
      </div>
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl2]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
          selectedMasteries={props.selectedMasteries}
          updateSelectedMasteries={props.updateSelectedMasteries}
          updateSelectedMorale={props.updateSelectedMorale}
          updateSelectedTactics={props.updateSelectedTactics}
          updateCoreTactics={props.updateCoreTactics}
          updateCoreMorales={props.updateCoreMorales}
        />
      </div>
      <div className={css.ability}>
        <AbilityMastery
          pathMeter={props.pathMeter}
          masteryPoints={props.masteryPoints}
          incrementMasteryPoints={props.incrementMasteryPoints}
          decrementMasteryPoints={props.decrementMasteryPoints}
          setMasteryPoints={props.setMasteryPoints}
          details={props.abilities[props.pathOptionalAbilities.lvl1]}
          masteryPath={props.masteryPath}
          setPathMeter={props.setPathMeter}
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

export default PathMeter;
