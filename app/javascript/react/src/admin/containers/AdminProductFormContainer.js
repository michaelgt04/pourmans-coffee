import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { postProduct } from '../actions/postProduct';
import { patchProduct } from '../actions/editProduct';
import { getProductForEdit } from '../actions/getProductForEdit';
import { cancelEdit } from '../actions/cancelEdit';
import ProductFields from '../components/ProductFields';
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

class AdminProductFormContainer extends Component {

  render(){
    let currentProductData = this.props.productForEdit

    const NewProductForm = reduxForm({
      form: 'new-product',
      validate,
      onSubmit: onNewProductSubmit
    })(ProductFields)

    const EditProductForm = reduxForm({
      form: 'edit-product',
      validate,
      onSubmit: onEditProductSubmit,
      initialValues: currentProductData
    })(ProductFields)

    let form;
    if(this.props.productForEdit){
      form =
      <EditProductForm cancelEdit={this.props.cancelEdit}/>
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
    productForEdit: state.productForm.productForEdit
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getProductForEdit: (id) => {
      dispatch(getProductForEdit(id))
    },
    cancelEdit: () => {
      dispatch(cancelEdit())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductFormContainer)
