import { GET_EVENTS_SUCCESS } from '../actions/getEvents';
import { POST_EVENT_SUCCESS } from '../../admin/actions/postEvent';

let initialState = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};

export const EventsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_EVENTS_SUCCESS:
      console.log(action.events)
      return Object.assign({}, state, action.events)
    case POST_EVENT_SUCCESS:
      newState = Object.assign({}, state)
      Object.keys(newState).forEach(key => {
        if (action.event.day == key){
          newState[key] = newState[key].concat(action.event)     
        }
      })
      return newState
    default:
      return state
  }
}
