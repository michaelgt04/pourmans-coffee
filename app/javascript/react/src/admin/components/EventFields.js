import React from 'react';
import { Field } from 'redux-form';
import { postEvent } from '../actions/postEvent';

const DaySelect = props => {

  return(
    <div className='row'>
      <select {...props.input}> 
        <option value=''></option>
        <option value='monday'>Monday</option>
        <option value='tuesday'>Tuesday</option>
        <option value='wednesday'>Wednesday</option>
        <option value='thursday'>Thursday</option>
        <option value='friday'>Friday</option>
        <option value='saturday'>Saturday</option>
        <option value='sunday'>Sunday</option>
      </select>
      {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
    </div>
  )
}

const EventFields = props => {
  
  return(
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='day'>Day of Week</label>
      <Field name='day' component={DaySelect} />

      {props.error && <strong>{props.error}</strong>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default EventFields;
