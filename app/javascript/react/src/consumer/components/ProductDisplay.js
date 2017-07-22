import React from 'react';
import ProductTile from './ProductTile';

const ProductDisplay = props => {
  let products = props.content.map(product => {
  let onHover = () => { props.hoverProduct(product.id) }

    return(
      <ProductTile
        key={product.id}
        product={product}
        selectedProductId={props.selectedProductId}
        handleHover={onHover}
        handleLeave={props.leaveProduct}
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
