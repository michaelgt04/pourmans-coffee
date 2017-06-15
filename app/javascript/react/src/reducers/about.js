import { GET_ABOUT_SUCCESS } from '../actions/getAbout';

let initialState = [
  {
    about: {
      blurb: ""
    }
  }
]

export const AboutReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ABOUT_SUCCESS:
      return action.about
    default:
      return state
  }
}
