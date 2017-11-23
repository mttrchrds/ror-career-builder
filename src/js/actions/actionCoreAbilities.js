export const ADD_CORE_ABILITY = "add_core_ability";

export function addCoreAbility(ability) {

  console.log('adding core?', ability);

  return {
    type: ADD_CORE_ABILITY,
    payload: ability
  };
}