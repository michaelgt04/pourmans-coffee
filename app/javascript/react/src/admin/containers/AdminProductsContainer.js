import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../sharedResources/actions/getProducts';
import { deleteProduct } from '../actions/deleteProduct';
import GroupTile from '../components/GroupTile';
import AdminProductForm from '../components/AdminProductForm';

class AdminProductsContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getProducts();
  }

  render(){
    let errorDiv;

    if(this.props.error){
      errorDiv = <div>{this.props.error}</div>
    }
    return(
      <div>
        {errorDiv}

        <GroupTile
          key="drinks"
          name="Drinks"
          products={this.props.products.drinks}
          deleteProduct={this.props.deleteProduct}
        />
        <GroupTile
          key="food"
          name="Food"
          products={this.props.products.food}
          deleteProduct={this.props.deleteProduct}
        />
        <AdminProductForm />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    products: state.products.products,
    error: state.products.error
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts())
    },
    deleteProduct: (productId) => {
      dispatch(deleteProduct(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);
