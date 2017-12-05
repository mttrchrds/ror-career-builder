import { ADD_CORE_MORALE, RESET_CORE_MORALES } from "../actions/actionCoreMorales";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_MORALE:
      return [ ...state, action.payload ];
    case RESET_CORE_MORALES:
      return action.payload;
    default:
      return state;
  }
}