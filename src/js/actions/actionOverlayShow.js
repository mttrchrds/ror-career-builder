export const TOGGLE_OVERLAY_SHOW = "toggle_overlay_show";

export function toggleOverlayShow(bool) {

  return {
    type: TOGGLE_OVERLAY_SHOW,
    payload: bool
  };
}