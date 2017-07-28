import { SELECT_PRODUCT } from '../../admin/actions/selectProduct';
import { GET_PRODUCT_FOR_EDIT_SUCCESS } from '../../admin/actions/getProductForEdit';
import { EDIT_PRODUCT_SUCCESS } from '../../admin/actions/editProduct';

let initialState = {
  productId: null,
  productForEdit: null
}

export const ProductFormReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case GET_PRODUCT_FOR_EDIT_SUCCESS:
      newState = {
        productForEdit: action.productForEdit,
        productId: action.productId
      }
      return Object.assign({}, state, newState)
    case EDIT_PRODUCT_SUCCESS:
      newState = { productForEdit: null }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
