export const SELECT_MASTERY_ABILITY = "select_mastery_ability";
export const DESELECT_MASTERY_ABILITY = "deselect_mastery_ability";
export const RESET_MASTERY_ABILITIES = "reset_mastery_abilities";

export function selectMasteryAbility(abilitiesArray, abilityId) {

  return {
    type: SELECT_MASTERY_ABILITY,
    payload: {
      abilitiesArray,
      abilityId 
    }
  };
}

export function deselectMasteryAbility(abilitiesArray, abilityId) {
  
  return {
    type: DESELECT_MASTERY_ABILITY,
    payload: {
      abilitiesArray,
      'abilityIndex': abilitiesArray.indexOf(abilityId)
    }
  };
}

export function resetMasteryAbilities() {

  return {
    type: RESET_MASTERY_ABILITIES,
    payload: []
  };
}