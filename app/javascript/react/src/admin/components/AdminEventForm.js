import React from 'react';
import { reduxForm } from 'redux-form';
import EventFields from './EventFields';
import { postEvent } from '../actions/postEvent';

let validate = values => {
  const errors = {};

  if (!values.day){
    errors.day = 'Please enter a day!'
  }

  if (!values.startTime){
    errors.startTime = 'Please enter a start time!' 
  } else if (!/am$|pm$/.test(values.startTime)){
    errors.startTime = 'Please provide a time of day (am or pm)!'
  } else if (!/^\d:\d\d(?=am|pm)|^1[0-2]:\d\d(?=am|pm)/.test(values.startTime)){
    errors.startTime = 'Please provide a valid time format (e.g. 9:00am)' 
  }
  
  if (!values.endTime){
    errors.endTime = 'Please enter an end time!' 
  } else if (!/am$|pm$/.test(values.endTime)){
    errors.endTime = 'Please provide a time of day (am or pm)!'
  } else if (!/^\d:\d\d(?=am|pm)|^1[0-2]:\d\d(?=am|pm)/.test(values.endTime)){
    errors.endTime = 'Please provide a valid time format (e.g. 9:00am)'
  }
  
  if (!values.location){
    errors.location = 'Please enter a location!' 
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
