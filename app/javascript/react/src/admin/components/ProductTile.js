import React from 'react';

const ProductTile = props => {
  return(
    <div>
      <p>{props.product.title}</p>
      <p>{props.product.description}</p>
    </div>
  )
}

export default ProductTile;
