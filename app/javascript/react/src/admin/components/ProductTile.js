import React from 'react';

const ProductTile = props => {
  let handleDeleteClick = () => {
    if(confirm(`Are you sure you want to delete ${props.product.title}?`)) {
      props.deleteProduct(props.product.id)
    }
  }

  let handleSelectedClick = () => {
    props.selectProductForEdit(props.product.id)
  }

  return(
    <div>
      <p>{props.product.title}</p>
      <p>{props.product.description}</p>
      <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
      <button className="edit-button" onClick={handleSelectedClick}>Edit</button>
    </div>
  )
}

export default ProductTile;
