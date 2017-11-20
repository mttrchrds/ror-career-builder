export const SET_RENOWN = "set_renown";

export function setRenown(renown) {

  return {
    type: SET_RENOWN,
    payload: Number(renown)
  };
}