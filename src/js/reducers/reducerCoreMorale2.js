import { ADD_CORE_MORALE_2, RESET_CORE_MORALE_2 } from "../actions/actionCoreMorale2";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CORE_MORALE_2:
      return [ ...state, action.payload ];
    case RESET_CORE_MORALE_2:
      return action.payload;
    default:
      return state;
  }
}