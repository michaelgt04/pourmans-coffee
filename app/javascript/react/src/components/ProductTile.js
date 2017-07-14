import React from 'react';

const ProductTile = props => {
  let product = props.product
  
  let displayText = product => {
    if (product.id === props.selectedProductId){
      return <p>{product.description}</p>
    } 
  }

  return(
    <div onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} className='product-tile small-10 medium-6 small-offset-1 medium-offset-0 columns end'>
      <h3>{product.title}</h3>
      {displayText(product)}
    </div>
  )
}

export default ProductTile;
