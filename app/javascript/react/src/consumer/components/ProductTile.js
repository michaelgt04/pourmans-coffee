import React from 'react';

const ProductTile = props => {
  let product = props.product

  return(
    <div onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} className='product-tile '>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductTile;
