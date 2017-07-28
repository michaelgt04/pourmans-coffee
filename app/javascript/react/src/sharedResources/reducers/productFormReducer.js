import { SELECT_PRODUCT } from '../../admin/actions/selectProduct';

let initialState = {
  productId: null
}

export const ProductFormReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SELECT_PRODUCT:
      newState = { productId: action.productId }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
