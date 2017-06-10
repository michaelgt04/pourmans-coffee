import { GET_EVENTS_SUCCESS } from '../actions/getEvents';

let initialState = [];

export const EventsReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_EVENTS_SUCCESS:
      return action.events
    default:
      return state
  }
}
