import React from 'react';
import styled from 'styled-components';

const ProductTile = props => {
  const ProductTileWrapper = styled.div`
    display: flex;
    margin: 2rem 0;
  `;

  const TitleText = styled.span`
    flex: 1 1 20%;
  `;

  const DescriptionText = styled.span`
    padding-left: 20px;
    flex: 1 1 60%;
  `;

  const ButtonWrapper = styled.div`
    padding-left: 10px;
    flex: 1 1 30%;
  `;

  const TileButton = styled.button`
    width: 75px;
    padding: 7px 0;
    background-color: lightgrey;
    margin: 0 5px;

    &:hover {
      background-color: linen;
    }
  `;

  let handleDeleteClick = () => {
    if(confirm(`Are you sure you want to delete ${props.product.title}?`)) {
      props.deleteProduct(props.product.id)
    }
  }

  let handleSelectedClick = () => {
    props.selectProductForEdit(props.product.id)
  }

  return(
    <ProductTileWrapper>
      <TitleText>{props.product.title}</TitleText>
      <DescriptionText>{props.product.description}</DescriptionText>
      <ButtonWrapper>
        <TileButton className="delete-button" onClick={handleDeleteClick}>Delete</TileButton>
        <TileButton className="edit-button" onClick={handleSelectedClick}>Edit</TileButton>
      </ButtonWrapper>
    </ProductTileWrapper>
  )
}

export default ProductTile;
