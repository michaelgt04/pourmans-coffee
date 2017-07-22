import React from 'react';
import { reduxForm } from 'redux-form';
import EventFields from './EventFields';
import { postEvent } from '../actions/postEvent';

let validate = values => {
  const errors = {};

  if (!values.day){
    errors.day = 'Please enter a day!'
  }
  
  return errors
}

let onSubmit = (values, dispatch) => {
  dispatch(postEvent(values))
}

export default reduxForm({
  form: 'events',
  onSubmit,
  validate
})(EventFields)
