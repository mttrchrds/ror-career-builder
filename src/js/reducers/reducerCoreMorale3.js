import { ADD_CORE_MORALE_3, RESET_CORE_MORALE_3 } from "../actions/actionCoreMorale3";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_MORALE_3:
      return [ ...state, action.payload ];
    case RESET_CORE_MORALE_3:
      return action.payload;
    default:
      return state;
  }
}