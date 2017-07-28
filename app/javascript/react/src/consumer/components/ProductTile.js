import React from 'react';

const ProductTile = props => {
  let product = props.product
  
  let selectedProduct = product => {
    if (product.id === props.selectedProductId){
      return 'selected'
    } 
  }

  return(
    <div onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} className='product-tile '>
      <h3 className={selectedProduct(product)}>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductTile;
