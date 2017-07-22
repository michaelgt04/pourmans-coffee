import React from 'react';
import ProductTile from './ProductTile';

const ProductDisplay = props => {
  let products = props.content.map(product => {

    return(
      <ProductTile
        key={product.id}
        product={product}
        selectedProductId={props.selectedProductId}
      />
    )
  })

  return (
    <div>
      { products }
    </div>
  )
}

export default ProductDisplay;
