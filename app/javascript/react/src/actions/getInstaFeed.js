import {  envVar } from '../helpers/envVar';

export const GET_INSTAFEED_SUCCESS = 'GET_INSTAFEED_SUCCESS';

export const getInstaFeedSuccess = instagram => {
  return {
    type: GET_INSTAFEED_SUCCESS,
    instagram
  }
}

export const fetchInstaFeed = () => {
  let instagramToken = envVar('instagram')
  return(dispatch) => {
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${instagramToken}`)
    .then(response => {
      let photos = response.json()
      return photos
    }).then(photos => {
      return dispatch(getInstaFeedSuccess(photos))
    })
  }
}
