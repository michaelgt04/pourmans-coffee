export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';


export const deleteProduct = (productId, dispatch) => {
  return(dispatch) => {
    fetch(`/api/v1/products/${productId}.json`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      if(response.ok) {
        let product = response.json()
        return product;
      }
    }).then(product => {
      dispatch(deleteProductSuccess(product))
    }).catch(error => {
      let deleteError = "There was a problem deleting this product"
      dispatch(deleteProductFailure(deleteError))
    })
  }
}

export const deleteProductFailure = (error) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    error
  };
};

export const deleteProductSuccess = (product) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    product
  };
};
