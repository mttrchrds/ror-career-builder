import { SELECT_MASTERY_MORALE, DESELECT_MASTERY_MORALE, RESET_MASTERY_MORALES } from "../actions/actionMasteryMorales";

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_MASTERY_MORALE:
      return [...action.payload.abilitiesArray, action.payload.abilityId];
    case DESELECT_MASTERY_MORALE:
      return [
        ...action.payload.abilitiesArray.slice(0, action.payload.abilityIndex),
        ...action.payload.abilitiesArray.slice(action.payload.abilityIndex + 1)
      ];
    case RESET_MASTERY_MORALES:
      return action.payload;
    default:
      return state;
  }
}