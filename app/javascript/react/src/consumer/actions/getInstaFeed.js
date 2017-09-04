import { envVar } from '../helpers/envVar';

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
    $.ajax({
        url: `https://api.instagram.com/v1/users/1425742777/media/recent/?count=6&access_token=${instagramToken}&callback=?`,
        type: 'GET',
        data: {},
        dataType: 'jsonp',
        success: function(data) {
          return dispatch(getInstaFeedSuccess(data.data))
        },
        error: function(err) {
          alert(err);
        }
      })
  }
}
