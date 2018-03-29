import { GET_EVENT_FOR_EDIT_SUCCESS } from '../actions/patchEvent';
import { PATCH_EVENT_SUCCESS } from '../actions/patchEvent';

const initialState = {
  eventForEditId: null,
  eventForEdit: null
}

export const EventEditReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_EVENT_FOR_EDIT_SUCCESS:
      return Object.assign({}, state, { eventForEdit: action.event })
    case PATCH_EVENT_SUCCESS:
      newState = { eventForEdit: null }
      return newState
    default:
      return state
  }
}
