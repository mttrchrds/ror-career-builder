export const ADD_CORE_MORALE_2 = "add_core_morale_2";
export const RESET_CORE_MORALE_2 = "rest_core_morale_2";

export function addCoreMorale2(ability) {

  return {
    type: ADD_CORE_MORALE_2,
    payload: ability.id
  };
}

export function resetCoreMorale2() {

  return {
    type: RESET_CORE_MORALE_2,
    payload: []
  };
}