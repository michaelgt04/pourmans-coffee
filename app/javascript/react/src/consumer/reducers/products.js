import { GET_PRODUCTS_SUCCESS } from '../actions/getProducts';

let initialState = {
  products: {
    food: [],
    drinks: []
  },
  productId: null
};

export const ProductsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_PRODUCTS_SUCCESS:
      newState = { products: action.products.products }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
