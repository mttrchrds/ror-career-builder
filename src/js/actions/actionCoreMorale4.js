export const ADD_CORE_MORALE_4 = "add_core_morale_4";
export const RESET_CORE_MORALE_4 = "reset_core_morale_4";

export function addCoreMorale4(ability) {

  return {
    type: ADD_CORE_MORALE_4,
    payload: ability.id
  };
}

export function resetCoreMorale4() {

  return {
    type: RESET_CORE_MORALE_4,
    payload: []
  };
}