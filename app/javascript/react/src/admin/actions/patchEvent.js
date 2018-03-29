import humps from 'humps';
export const GET_EVENT_FOR_EDIT_SUCCESS = 'GET_EVENT_FOR_EDIT_SUCCESS'
export const PATCH_EVENT_SUCCESS = 'PATCH_EVENT_SUCCESS'

export const getEventForEditSuccess = event => {
  return {
    type: GET_EVENT_FOR_EDIT_SUCCESS,
    event
  }
}  

export const patchEventSuccess = event => {
  return {
    type: PATCH_EVENT_SUCCESS,
    event
  }
}  

export const getEventForEdit = id => {
  return (dispatch) => {
    fetch(`/api/v1/events/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      }).then(event => {
        dispatch(getEventForEditSuccess(humps.camelizeKeys(event)))
      })
  }
}

export const patchEvent = values => {
  return (dispatch, getState) => {
    const id = getState().eventEdit.eventForEdit.id
    const decamelizedData = { event: humps.decamelizeKeys(values) };
    const body = JSON.stringify(decamelizedData)

    fetch(`/api/v1/events/${id}`,{
      method: 'PATCH',
      body,
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      }).then(event => {
        dispatch(patchEventSuccess(event))
      })
  }
}
