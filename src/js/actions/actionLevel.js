export const SET_LEVEL = "set_level";

export function setLevel(level) {

  return {
    type: SET_LEVEL,
    payload: Number(level)
  };
}