import _ from 'lodash';

export const SET_ABILITIES_OBJECT = "set_abilities_object";
export const RESET_ABILITIES_OBJECT = "reset_abilities_object";

export function setAbilitiesObject(abilities) {

  const abilitiesObject = _.mapKeys(abilities, "id");
  
  return {
    type: SET_ABILITIES_OBJECT,
    payload: abilitiesObject
  };
}

export function resetAbilitiesObject() {
  
  return {
    type: RESET_ABILITIES_OBJECT,
    payload: {}
  };
}