import React from 'react';
import ProductTile from './ProductTile';

const GroupTile = props => {

  let items = props.products.map(product => {
    return(
      <ProductTile
        key={product.id}
        product={product}
      />
    )
  })
  return(
    <div>
      <h4>{props.name}</h4>
      {items}
    </div>
  )
}

export default GroupTile;