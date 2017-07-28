import { GET_PRODUCTS_SUCCESS } from '../actions/getProducts';
import { POST_PRODUCT_SUCCESS } from '../../admin/actions/postProduct';
import { EDIT_PRODUCT_SUCCESS } from '../../admin/actions/editProduct';
import { DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from '../../admin/actions/deleteProduct';


let initialState = {
  products: {
    food: [],
    drinks: []
  },
  error: ""
};

export const ProductsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_PRODUCTS_SUCCESS:
      newState = {
        products: action.products.products
      }
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
    case DELETE_PRODUCT_SUCCESS:
      if(action.product.group === 'food') {
        let foodProducts = state.products.food
        let deletedProductIndex = foodProducts.findIndex(product => product.id === action.product.id);
        foodProducts.splice(deletedProductIndex, 1);

        newState = {
          products: {
            food: foodProducts,
            drinks: state.products.drinks
          },
          error: ""
        }
        return Object.assign({}, state, newState)
      } else if (action.product.group === 'drink'){
          let drinkProducts = state.products.drinks
          let deletedProductIndex = drinkProducts.findIndex(product => product.id === action.product.id);
          drinkProducts.splice(deletedProductIndex, 1);

          newState = {
            products: {
              food: state.products.food,
              drinks: drinkProducts
            }
          }
          return Object.assign({}, state, newState)
        }
    case DELETE_PRODUCT_FAILURE:
      newState = { error: action.error }
      return Object.assign({}, state, newState)
    case EDIT_PRODUCT_SUCCESS:
      debugger;
    default:
      return state
  }
}
