import { GET_INSTAFEED_SUCCESS } from '../actions/getInstaFeed';

let initialState = [];

export const InstaFeedReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_INSTAFEED_SUCCESS:
      return action.instagram
    default:
      return state
  }
}
