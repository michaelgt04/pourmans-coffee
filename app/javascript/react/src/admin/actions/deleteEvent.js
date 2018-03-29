import { SubmissionError } from 'redux-form';
import humps from 'humps';

export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"

export const deleteEventSuccess = event => {
  return {
    type: DELETE_EVENT_SUCCESS,
    event
  }
}

export const deleteEvent = id => {
  return (dispatch, getState) => {
    fetch(`/api/v1/events/${id}.json`,{
      method: 'DELETE',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if (response.ok){
        return response.json()
      } else {
        throw new SubmissionError({ _error: 'It did not work' })
      }
    }).then(event => {
      dispatch(deleteEventSuccess(event))
    }).catch(error => {
      console.log(error)
    })
  }
} 
