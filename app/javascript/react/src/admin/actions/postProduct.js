import { SubmissionError, reset } from 'redux-form';

export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';

export const postProduct = (payload, dispatch) => {
  let body = JSON.stringify({ product: payload })

  return (dispatch, getState) => {
    fetch('/api/v1/products.json', {
      body,
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if(response.ok){
        return response.json()
      } else {
        throw new SubmissionError({ _error: 'It did not work' })
      }
    }).then(product => {
      dispatch(reset('new-product'));
      dispatch(postProductSuccess(product))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const postProductSuccess = product => {
  return {
    type: POST_PRODUCT_SUCCESS,
    product
  }
}
