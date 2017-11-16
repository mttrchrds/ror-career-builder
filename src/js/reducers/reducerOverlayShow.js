import { TOGGLE_OVERLAY_SHOW } from "../actions/actionOverlayShow";

export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_OVERLAY_SHOW:
      return action.payload;
    default:
      return state;
  }
}