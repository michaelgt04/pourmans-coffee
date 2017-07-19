import { SELECT_ANCHOR, SHOW_NAV, HIDE_NAV, WINDOW_LOCATION } from '../actions/selectAnchor';

let initialState = {
  selectedAnchorId: null,
  showNav: false,
  windowLocation: 0
}

export const AnchorReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SELECT_ANCHOR:
      newState = { selectedAnchorId: action.selectedAnchorId }
      return Object.assign({}, state, newState)
    case SHOW_NAV:
      newState = { showNav: action.show }
      return Object.assign({}, state, newState)
    case HIDE_NAV:
      newState = { showNav: action.show }
      return Object.assign({}, state, newState)
    case WINDOW_LOCATION:
      newState = { windowLocation: action.windowLocation }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
