import { FETCH_ABILITIES, RESET_ABILITIES } from "../actions/actionAbilities";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ABILITIES:
      return action.payload.data;
    case RESET_ABILITIES:
      return action.payload;
    default:
      return state;
  }
}