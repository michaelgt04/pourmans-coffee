import { reset } from 'redux-form';

export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";

export const patchProduct = editProductFormInfo => dispatch => {
  let id = editProductFormInfo.id
  let body = JSON.stringify({ product: editProductFormInfo })
  fetch(`/api/v1/products/${id}`, {
    method: "PATCH",
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body
  }).then(response => {
    if(response.ok){
      return response.json()
    } else {
      console.log('error in fetch')
    }
  }).then(product => {
    dispatch(reset('edit-product'));
    dispatch(editProductSuccess(product))
  }).catch(error => {
    console.log(error)
  })
}

export const editProductSuccess = product => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    product
  }
}
