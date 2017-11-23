import { ADD_CORE_ABILITY } from "../actions/actionCoreAbilities";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_ABILITY:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}