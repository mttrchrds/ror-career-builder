import { CALCULATE_TACTIC_LIMIT, RESET_TACTIC_LIMIT } from "../actions/actionTacticLimit";

const initialLimit = 0;

export default function(state = initialLimit, action) {
  switch (action.type) {
    case CALCULATE_TACTIC_LIMIT:
      return action.payload;
    case RESET_TACTIC_LIMIT:
      return initialLimit;
    default:
      return state;
  }
}