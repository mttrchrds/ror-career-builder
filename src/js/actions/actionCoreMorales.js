export const ADD_CORE_MORALE = "add_core_morale";

export function addCoreMorale(ability) {

  return {
    type: ADD_CORE_MORALE,
    payload: ability
  };
}