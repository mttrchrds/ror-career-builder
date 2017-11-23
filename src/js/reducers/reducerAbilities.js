import { FETCH_ABILITIES, RESET_ABILITIES, UPDATE_ABILITIES } from "../actions/actionAbilities";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ABILITIES:
      return action.payload.data;
    case UPDATE_ABILITIES:
      return action.payload;
    case RESET_ABILITIES:
      return action.payload;
    default:
      return state;
  }
}