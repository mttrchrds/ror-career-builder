import { ADD_CORE_MORALE } from "../actions/actionCoreMorales";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_MORALE:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}