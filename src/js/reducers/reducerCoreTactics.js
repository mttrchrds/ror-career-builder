import { ADD_CORE_TACTIC, RESET_CORE_TACTICS } from "../actions/actionCoreTactics";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_TACTIC:
      return [ ...state, action.payload ];
    case RESET_CORE_TACTICS:
      return action.payload;
    default:
      return state;
  }
}