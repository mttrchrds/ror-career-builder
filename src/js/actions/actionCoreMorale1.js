export const ADD_CORE_MORALE_1 = "add_core_morale_1";
export const RESET_CORE_MORALE_1 = "reset_core_morale_1";

export function addCoreMorale1(ability) {

  return {
    type: ADD_CORE_MORALE_1,
    payload: ability.id
  };
}

export function resetCoreMorale1() {

  return {
    type: RESET_CORE_MORALE_1,
    payload: []
  };
}