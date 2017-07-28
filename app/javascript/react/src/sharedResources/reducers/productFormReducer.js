import { SELECT_PRODUCT } from '../../admin/actions/selectProduct';
import { GET_PRODUCT_FOR_EDIT_SUCCESS } from '../../admin/actions/getProductForEdit';

let initialState = {
  productId: null,
  productForEdit: null
}
// case SELECT_PRODUCT:
// newState = { productId: action.productId }
// return Object.assign({}, state, newState)

export const ProductFormReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_PRODUCT_FOR_EDIT_SUCCESS:
      newState = {
        productForEdit: action.productForEdit,
        productId: action.productId
      }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
