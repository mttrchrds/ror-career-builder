import { ADD_CORE_MORALE_1, RESET_CORE_MORALE_1 } from "../actions/actionCoreMorale1";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_MORALE_1:
      return [ ...state, action.payload ];
    case RESET_CORE_MORALE_1:
      return action.payload;
    default:
      return state;
  }
}