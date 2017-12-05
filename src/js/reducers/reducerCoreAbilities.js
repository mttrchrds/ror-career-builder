import { ADD_CORE_ABILITY, RESET_CORE_ABILITIES } from "../actions/actionCoreAbilities";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_ABILITY:
      return [ ...state, action.payload ];
    case RESET_CORE_ABILITIES:
      return action.payload;
    default:
      return state;
  }
}