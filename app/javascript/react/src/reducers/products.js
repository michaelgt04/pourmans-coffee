import { GET_PRODUCTS_SUCCESS, HOVER_PRODUCT, LEAVE_PRODUCT } from '../actions/getProducts';

let initialState = {
  products: [],
  productId: null
};

export const ProductsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_PRODUCTS_SUCCESS:
      newState = { products: action.products }
      return Object.assign({}, state, newState)
    case HOVER_PRODUCT:
      newState = { productId: action.productId }
      return Object.assign({}, state, newState)
    case LEAVE_PRODUCT:
      newState = { productId: null }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
