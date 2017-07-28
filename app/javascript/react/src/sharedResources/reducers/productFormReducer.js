import { SELECT_PRODUCT } from '../../admin/actions/selectProduct';
import { GET_PRODUCT_FOR_EDIT_SUCCESS } from '../../admin/actions/getProductForEdit';

let initialState = {
  productId: null,
  productForEdit: null
}

export const ProductFormReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SELECT_PRODUCT:
      newState = { productId: action.productId }
      return Object.assign({}, state, newState)
    case GET_PRODUCT_FOR_EDIT_SUCCESS:
      newState = { productForEdit: action.productForEdit}
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
