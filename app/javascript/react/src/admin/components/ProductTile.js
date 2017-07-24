import React from 'react';

const ProductTile = props => {
  let handleDeleteClick = () => {
    if(confirm('Are you sure?')) {
      props.deleteProduct(props.product.id)
    }
  }

  return(
    <div>
      <p>{props.product.title}</p>
      <p>{props.product.description}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default ProductTile;
