import { SET_RENOWN } from "../actions/actionRenown";

export default function(state = 10, action) {
  switch (action.type) {
    case SET_RENOWN:
      return action.payload;
    default:
      return state;
  }
}