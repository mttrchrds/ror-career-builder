import { FETCH_ABILITIES, RESET_ABILITIES } from "../actions/actionAbilities";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ABILITIES:
      console.log(action.payload.data);
      return action.payload.data.abilities;
    case RESET_ABILITIES:
      return action.payload;
    default:
      return state;
  }
}