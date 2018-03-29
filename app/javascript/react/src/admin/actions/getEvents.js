export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';

export const getEventsSuccess = events => {
  return {
    type: GET_EVENTS_SUCCESS,
    events
  }
}

export const getEvents = () => {
  return (dispatch) => {
    fetch('/api/v1/events')
    .then(response => {
      let events = response.json()
      return events
    }).then(events => {
      console.log(events)
      return dispatch(getEventsSuccess(events))
    })
  }
}
