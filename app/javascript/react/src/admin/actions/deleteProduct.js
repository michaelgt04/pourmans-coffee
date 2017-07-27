export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';


export const deleteProduct = (productId, dispatch) => {
  return(dispatch) => {
    fetch(`/api/v1/products/${productId}.json`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      let product = response.json()
      return product;
    }).then(product => {
      dispatch(deleteProductSuccess(product))
    }).catch(error => {
      console.log(error + " in deleteProduct action")
    })
  }
}

export const deleteProductSuccess = (product) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    product
  };
};
