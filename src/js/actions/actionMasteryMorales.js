export const SELECT_MASTERY_MORALE = "select_mastery_morale";
export const DESELECT_MASTERY_MORALE = "deselect_mastery_morale";
export const RESET_MASTERY_MORALES = "reset_mastery_morales";

export function selectMasteryMorale(abilitiesArray, abilityId) {

  return {
    type: SELECT_MASTERY_MORALE,
    payload: {
      abilitiesArray,
      abilityId 
    }
  };
}

export function deselectMasteryMorale(abilitiesArray, abilityId) {
  
  return {
    type: DESELECT_MASTERY_MORALE,
    payload: {
      abilitiesArray,
      'abilityIndex': abilitiesArray.indexOf(abilityId)
    }
  };
}

export function resetMasteryMorales() {

  return {
    type: RESET_MASTERY_MORALES,
    payload: []
  };
}