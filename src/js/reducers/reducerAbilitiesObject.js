import { SET_ABILITIES_OBJECT, RESET_ABILITIES_OBJECT } from "../actions/actionAbilitiesObject";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_ABILITIES_OBJECT:
      return action.payload;
    case RESET_ABILITIES_OBJECT:
      return action.payload;
    default:
      return state;
  }
}