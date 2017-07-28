export const SELECT_PRODUCT = 'SELECT_PRODUCT'

export const selectProduct = productId => {
  return {
    type: SELECT_PRODUCT,
    productId
  };
};
