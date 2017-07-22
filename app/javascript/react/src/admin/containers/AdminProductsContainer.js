import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/getProducts';
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
    return(
      <div>
        <GroupTile
          key="drinks"
          name="Drinks"
          products={this.props.products.drinks}
        />
        <GroupTile
          key="food"
          name="Food"
          products={this.props.products.food}
        />
        <AdminProductForm />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);
