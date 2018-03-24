import { GET_EVENTS_SUCCESS } from '../actions/getEvents';
import { POST_EVENT_SUCCESS } from '../../admin/actions/postEvent';
import { DELETE_EVENT_SUCCESS } from '../../admin/actions/deleteEvent';

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
      return Object.assign({}, state, action.events)
    case POST_EVENT_SUCCESS:
      newState = Object.assign({}, state)
      Object.keys(newState).forEach(key => {
        if (action.event.day === key){
          newState[key] = newState[key].concat(action.event)     
        }
      })
      return newState
    case DELETE_EVENT_SUCCESS:
      newState = Object.assign({}, state)
      Object.keys(state).forEach(key => {
        if (action.event.day === key){
          newState[key] = newState[key].filter(event => { event.id !== action.event.id })
        }
      })
      console.log(state)
      console.log(newState)
      return newState
    default:
      return state
  }
}
