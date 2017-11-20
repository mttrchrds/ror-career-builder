import { SET_LEVEL } from "../actions/actionLevel";

export default function(state = 1, action) {
  switch (action.type) {
    case SET_LEVEL:
      return action.payload;
    default:
      return state;
  }
}