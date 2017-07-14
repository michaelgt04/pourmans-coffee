import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, hoverProduct, leaveProduct } from '../actions/getProducts';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProductTile from '../components/ProductTile';

class ProductsContainer extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getProducts()
  }

  render(){
    let products = this.props.products.map(product => {
      let onHover = () => { this.props.hoverProduct(product.id) }

      let displayText, title;
      if (product.id === this.props.selectedProductId){
        title = product.title
        displayText = product.description
      }

      return(
        <ProductTile
          key={product.id}
          product={product}
          title={title}
          displayText={displayText}
          handleHover={onHover}
          handleLeave={this.props.leaveProduct}
        />
      )
    })

    return(
      <div className='products row'>
        <ScrollableAnchor id={'products'}>
          <h1>The Goods</h1>
        </ScrollableAnchor>
        {products}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    products: state.products.products,
    selectedProductId: state.products.productId
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts())
    },
    hoverProduct: (id) => {
      dispatch(hoverProduct(id))
    },
    leaveProduct: () => {
      dispatch(leaveProduct())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
