export const ADD_CORE_ABILITY = "add_core_ability";

export function addCoreAbility(ability) {

  return {
    type: ADD_CORE_ABILITY,
    payload: ability
  };
}