import { FETCH_ABILITIES } from "../actions/actionAbilities";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ABILITIES:
      //return action.payload.data;
      console.log(action.payload.data);
      return state;
    default:
      return state;
  }
}