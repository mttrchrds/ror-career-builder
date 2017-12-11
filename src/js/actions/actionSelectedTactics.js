export const SELECT_TACTIC = "select_tactic";
export const DESELECT_TACTIC = "deselect_tactic";
export const RESET_SELECTED_TACTICS = "reset_selected_tactics";

export function selectTactic(tacticsArray, tacticId) {

  return {
    type: SELECT_TACTIC,
    payload: {
      tacticsArray,
      tacticId 
    }
  };
}

export function deselectTactic(tacticsArray, tacticId) {
  
  return {
    type: DESELECT_TACTIC,
    payload: {
      tacticsArray,
      'tacticIndex': tacticsArray.indexOf(tacticId)
    }
  };
}

export function resetSelectedTactics() {

  return {
    type: RESET_SELECTED_TACTICS,
    payload: []
  };
}