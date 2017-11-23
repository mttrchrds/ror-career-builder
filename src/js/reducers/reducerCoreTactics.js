import { ADD_CORE_TACTIC } from "../actions/actionCoreTactics";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_TACTIC:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}