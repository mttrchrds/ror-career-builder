import { ADD_CORE_MORALE_4, RESET_CORE_MORALE_4 } from "../actions/actionCoreMorale4";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_MORALE_4:
      return [ ...state, action.payload ];
    case RESET_CORE_MORALE_4:
      return action.payload;
    default:
      return state;
  }
}