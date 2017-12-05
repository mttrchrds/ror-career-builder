export const ADD_CORE_TACTIC = "add_core_tactic";
export const RESET_CORE_TACTICS = "reset_core_tactics";

export function addCoreTactic(ability) {

  return {
    type: ADD_CORE_TACTIC,
    payload: ability.id
  };
}

export function resetCoreTactics() {

  return {
    type: RESET_CORE_TACTICS,
    payload: []
  };
}