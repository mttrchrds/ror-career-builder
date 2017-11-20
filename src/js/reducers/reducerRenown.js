import { SET_RENOWN, RESET_RENOWN } from "../actions/actionRenown";

const initialRenown = 10;

export default function(state = initialRenown, action) {
  switch (action.type) {
    case SET_RENOWN:
      return action.payload;
    case RESET_RENOWN:
      return initialRenown;
    default:
      return state;
  }
}