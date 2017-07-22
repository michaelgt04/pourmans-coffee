import { SubmissionError } from 'redux-form';

export const postEvent = payload => {
  console.log(payload)
  let body = JSON.stringify(payload)

  return fetch('/api/v1/events', {
    body,
    method: 'POST'
  }).then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw new SubmissionError({ _error: 'It did not work' }) 
    }
  }).then(events => {
    console.log(events) 
  }).catch(error => {
    console.log(error) 
  })
}
