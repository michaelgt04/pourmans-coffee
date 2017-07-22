export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const HOVER_PRODUCT = 'HOVER_PRODUCT';
export const LEAVE_PRODUCT = 'LEAVE_PRODUCT';

export const getProductsSuccess = products => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  }
}

export const getProducts = () => {
  return (dispatch) => {
    fetch('/api/v1/products')
    .then(response => {
      let products = response.json()
      return products
    }).then(products => {
      return dispatch(getProductsSuccess(products))
    })
  }
}

export const hoverProduct = productId => {
  return {
    type: HOVER_PRODUCT,
    productId
  }
}

export const leaveProduct = () => {
  return {
    type: LEAVE_PRODUCT,
    productId: null
  }
}
