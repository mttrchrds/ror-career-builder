export const ADD_MASTERY_TACTIC = "add_mastery_tactic";
export const REMOVE_MASTERY_TACTIC = "remove_mastery_tactic";
export const RESET_MASTERY_TACTICS = "reset_mastery_tactics";

export function addMasteryTactic(abilitiesArray, abilityId) {

  return {
    type: ADD_MASTERY_TACTIC,
    payload: {
      abilitiesArray,
      abilityId 
    }
  };
}

export function removeMasteryTactic(abilitiesArray, abilityId) {
  
  return {
    type: REMOVE_MASTERY_TACTIC,
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