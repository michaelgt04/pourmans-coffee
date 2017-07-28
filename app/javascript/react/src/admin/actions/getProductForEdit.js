export const GET_PRODUCT_FOR_EDIT_SUCCESS = 'GET_PRODUCT_FOR_EDIT_SUCCESS'

export const getProductForEditSuccess = productForEdit => ({
  type: GET_PRODUCT_FOR_EDIT_SUCCESS,
  productForEdit
})

export const getProductForEdit = id => dispatch => {
  fetch(`/api/v1/products/${id}`)
  .then(response => {
    if(response.ok){
      return response.json()
    }
  }).then(product => {
    dispatch(getProductForEditSuccess(product))
  })
}
