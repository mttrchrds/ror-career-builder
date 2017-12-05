export const ADD_CORE_MORALE = "add_core_morale";
export const RESET_CORE_MORALES = "add_core_morale";

export function addCoreMorale(ability) {

  return {
    type: ADD_CORE_MORALE,
    payload: ability.id
  };
}

export function resetCoreMorales() {

  return {
    type: RESET_CORE_MORALES,
    payload: []
  };
}