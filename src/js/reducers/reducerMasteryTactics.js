import { SELECT_MASTERY_TACTIC, DESELECT_MASTERY_TACTIC, RESET_MASTERY_TACTICS } from "../actions/actionMasteryTactics";

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_MASTERY_TACTIC:
      return [...action.payload.abilitiesArray, action.payload.abilityId];
    case DESELECT_MASTERY_TACTIC:
      return [
        ...action.payload.abilitiesArray.slice(0, action.payload.abilityIndex),
        ...action.payload.abilitiesArray.slice(action.payload.abilityIndex + 1)
      ];
    case RESET_MASTERY_TACTICS:
      return action.payload;
    default:
      return state;
  }
}