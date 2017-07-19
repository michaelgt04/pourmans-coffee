import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, hoverProduct, leaveProduct } from '../actions/getProducts';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProductTile from '../components/ProductTile';
import ProductDisplay from '../components/ProductDisplay';

class ProductsContainer extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getProducts()
  }

  render(){
    let drink = this.props.products.drinks
    let food = this.props.products.food

    return(
      <div className='products row'>
        <ScrollableAnchor id={'products'}>
          <h2>The Goods</h2>
        </ScrollableAnchor>
        <div className='small-10 medium-4 small-offset-1 columns food'>
          <img className='header-icon' src='https://res.cloudinary.com/duor0bzmo/image/upload/v1500397705/muffin.png' />
          <ProductDisplay
            hoverProduct={this.props.hoverProduct}
            leaveProduct={this.props.leaveProduct}
            content={food}
          />
        </div>
        <div className='medium-2 columns'>
          <img className='divider hide-for-small-only' src='https://res.cloudinary.com/duor0bzmo/image/upload/v1500245857/pourmans-divider_gw69nz.png' />
        </div>
        <div className='small-10 medium-4 small-offset-1 medium-offset-0 columns end drink'>
          <img className='header-icon drink' src='https://res.cloudinary.com/duor0bzmo/image/upload/v1500419840/coffee-cup.png' />
          <ProductDisplay
            hoverProduct={this.props.hoverProduct}
            leaveProduct={this.props.leaveProduct}
            content={drink}
          />
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
