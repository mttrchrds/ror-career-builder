export const ADD_CORE_TACTIC = "add_core_tactic";

export function addCoreTactic(ability) {

  return {
    type: ADD_CORE_TACTIC,
    payload: ability
  };
}