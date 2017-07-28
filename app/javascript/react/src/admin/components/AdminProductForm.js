import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProductFields from './ProductFields';
import { postProduct } from '../actions/postProduct';
import { connect } from 'react-redux'
let validate = values => {
  const errors = {};

  if (!values.group){
    errors.group = 'Please choose food or drink!'
  }

  if (!values.title){
    errors.title = 'Please enter a title!'
  } else if (values.title.length > 25){
    errors.title = 'Title must be 25 characters or fewer'
  }

  if (!values.description){
    errors.description = 'Please enter a description!'
  } else if (values.description.length > 80){
    errors.description = 'Description must be 80 characters or fewer'
  }

  return errors
}

let onEditProductSubmit = (values, dispatch) => {
    dispatch(patchProduct(values))
}

let onNewProductSubmit = (values, dispatch) => {
  dispatch(postProduct(values));
}

class ProductFormWrapper extends Component {

  render(){
    if(this.props.productId){
      debugger;
    }

    const NewProductForm = reduxForm({
      form: 'new-product',
      validate,
      onSubmit: onNewProductSubmit
    })(ProductFields)

    // initialValues: currentProductData
    const EditProductForm = reduxForm({
      form: 'edit-product',
      validate,
      onSubmit: onEditProductSubmit,
    })(ProductFields)

    let form;
    if(this.props.productId){
      form = <EditProductForm />
    } else {
      form = <NewProductForm />
    }

    return(
      <div>
        {form}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    editProductForm: state.editProductFormReducer,
    productId: state.productForm.productId
  }
}

let mapDispatchToProps = dispatch => {
  return {
    text: (id) => {
      console.log('hello from map dispatch to props!')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormWrapper)
