import { SELECT_ANCHOR } from '../actions/selectAnchor';

let initialState = {
  selectedAnchorId: null
}

export const AnchorReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SELECT_ANCHOR:
      newState = { selectedAnchorId: action.selectedAnchorId }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
