import React from 'react';
import { reduxForm } from 'redux-form';
import ProductFields from './ProductFields';
import { postProduct } from '../actions/postProduct';

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

let onSubmit = (values, dispatch) => {
  dispatch(postProduct(values));
}

export default reduxForm({
  form: 'products',
  onSubmit,
  validate
})(ProductFields)
