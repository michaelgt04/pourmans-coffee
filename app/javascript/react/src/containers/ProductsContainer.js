import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, hoverProduct, leaveProduct } from '../actions/getProducts';
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

      return(
        <ProductTile
          key={product.id}
          product={product}
          selectedProductId={this.props.selectedProductId}
          handleHover={onHover}
          handleLeave={this.props.leaveProduct}
        />
      )
    })

    return(
      <div className='products'>
        <div className='row'>
          <h2 className='products-header'>The Goods</h2>
          {products}
        </div>
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
