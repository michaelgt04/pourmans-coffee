export const GET_ABOUT_SUCCESS = 'GET_ABOUT_SUCCESS';

export const getAboutSuccess = about => {
  return {
    type: GET_ABOUT_SUCCESS,
    about
  }
}

export const fetchAbout = () => {
  return (dispatch) => {
    fetch('/api/v1/about')
    .then(response => {
      let about = response.json()
      return about
    }).then(about => {
      return dispatch(getAboutSuccess(about))
    })
  }
}
