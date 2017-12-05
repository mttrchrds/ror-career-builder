export const ADD_CORE_ABILITY = "add_core_ability";
export const RESET_CORE_ABILITIES = "reset_core_abilities";

export function addCoreAbility(ability) {

  return {
    type: ADD_CORE_ABILITY,
    payload: ability.id
  };
}

export function resetCoreAbilities() {
  
    return {
      type: RESET_CORE_ABILITIES,
      payload: []
    };
  }