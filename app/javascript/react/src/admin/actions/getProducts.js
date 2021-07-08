export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const getProductsSuccess = products => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  }
}

export const getProducts = () => {
  return (dispatch) => {
    fetch('/api/v1/admin/products')
    .then(response => {
      let products = response.json()
      return products
    }).then(products => {
      return dispatch(getProductsSuccess(products))
    })
  }
}
