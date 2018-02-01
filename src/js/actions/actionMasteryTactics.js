export const SELECT_MASTERY_TACTIC = "select_mastery_tactic";
export const DESELECT_MASTERY_TACTIC = "deselect_mastery_tactic";
export const RESET_MASTERY_TACTICS = "reset_mastery_tactics";

export function selectMasteryTactic(abilitiesArray, abilityId) {

  return {
    type: SELECT_MASTERY_TACTIC,
    payload: {
      abilitiesArray,
      abilityId 
    }
  };
}

export function deselectMasteryTactic(abilitiesArray, abilityId) {
  
  return {
    type: DESELECT_MASTERY_TACTIC,
    payload: {
      abilitiesArray,
      'abilityIndex': abilitiesArray.indexOf(abilityId)
    }
  };
}

export function resetMasteryTactics() {

  return {
    type: RESET_MASTERY_TACTICS,
    payload: []
  };
}