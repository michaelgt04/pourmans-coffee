import React from 'react';

const ProductTile = props => {
  let product = props.product
  return(
    <div onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} className='product-tile small-10 medium-6 small-offset-1 medium-offset-0 columns end'>
      <div className='overlay'>
        <img src={product.img_url} />
        <span>{props.displayText}</span>
      </div>
    </div>
  )
}

export default ProductTile;
