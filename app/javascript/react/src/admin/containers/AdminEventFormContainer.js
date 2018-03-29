import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import EventFields from '../components/EventFields';
import { postEvent } from '../actions/postEvent';
import { patchEvent } from '../actions/patchEvent';

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

let onNewEventSubmit = (values, dispatch) => {
  dispatch(postEvent(values))
};

let onEditEventSubmit = (values, dispatch) => {
  dispatch(patchEvent(values))
};

class AdminEventFormContainer extends Component {
  render() {
    const { cancelEdit, eventForEdit } = this.props;

    const NewEventForm = reduxForm({
      form: 'new-event',
      validate,
      onSubmit: onNewEventSubmit
    })(EventFields)

    const EditEventForm = reduxForm({
      form: 'edit-event',
      validate,
      onSubmit: onEditEventSubmit,
      initialValues: eventForEdit
    })(EventFields)
    
    const form = eventForEdit ? <EditEventForm cancelEdit={cancelEdit}/> : <NewEventForm />

    return (
      <div>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    eventForEdit: state.eventEdit.eventForEdit
  }
}

export default connect(mapStateToProps)(AdminEventFormContainer)
