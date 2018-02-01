import { SELECT_MASTERY_ABILITY, DESELECT_MASTERY_ABILITY, RESET_MASTERY_ABILITIES } from "../actions/actionMasteryAbilities";

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_MASTERY_ABILITY:
      return [...action.payload.abilitiesArray, action.payload.abilityId];
    case DESELECT_MASTERY_ABILITY:
      return [
        ...action.payload.abilitiesArray.slice(0, action.payload.abilityIndex),
        ...action.payload.abilitiesArray.slice(action.payload.abilityIndex + 1)
      ];
    case RESET_MASTERY_ABILITIES:
      return action.payload;
    default:
      return state;
  }
}