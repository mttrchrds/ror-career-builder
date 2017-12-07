export const ADD_CORE_MORALE_3 = "add_core_morale_3";
export const RESET_CORE_MORALE_3 = "reset_core_morale_3";

export function addCoreMorale3(ability) {

  return {
    type: ADD_CORE_MORALE_3,
    payload: ability.id
  };
}

export function resetCoreMorale3() {

  return {
    type: RESET_CORE_MORALE_3,
    payload: []
  };
}