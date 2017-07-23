import { GET_PRODUCTS_SUCCESS } from '../actions/getProducts';
import { POST_PRODUCT_SUCCESS } from '../../admin/actions/postProduct';

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
    case POST_PRODUCT_SUCCESS:
      if (action.product.group === "food") {
        newState = {
          products: {
            food: state.products.food.concat(action.product),
            drinks: state.products.drinks
          }
        }
      } else if (action.product.group === "drink") {
          newState = {
            products: {
              food: state.products.food,
              drinks: state.products.drinks.concat(action.product)
            }
          }
        }
        console.log(newState)
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
