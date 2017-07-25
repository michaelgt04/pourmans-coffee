import { SubmissionError } from 'redux-form';
import humps from 'humps';

export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS';

export const postEventSuccess = event => {
  return {
    type: POST_EVENT_SUCCESS,
    event
  }
}

export const postEvent = payload => {
  let rubyPayload = humps.decamelizeKeys(payload)
  let body = JSON.stringify({ event: rubyPayload })

  return (dispatch, getState) => {
    fetch('/api/v1/events.json', {
      body,
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json'}
    }).then(response => {
      if(response.ok){
        return response.json()
      } else {
        throw new SubmissionError({ _error: 'It did not work' }) 
      }
    }).then(event => {
      dispatch(postEventSuccess(event))
    }).catch(error => {
      console.log(error) 
    })
  }
}
