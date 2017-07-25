import React from 'react';
import { Field } from 'redux-form';
import { postEvent } from '../actions/postEvent';

const DaySelect = props => {

  return(
    <div className='row'>
      <select {...props.input}> 
        <option value=''></option>
        <option value='Monday'>Monday</option>
        <option value='Tuesday'>Tuesday</option>
        <option value='Wednesday'>Wednesday</option>
        <option value='Thursday'>Thursday</option>
        <option value='Friday'>Friday</option>
        <option value='Saturday'>Saturday</option>
        <option value='Sunday'>Sunday</option>
      </select>
      {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
    </div>
  )
}

const TimeField = props => {
  return(
    <div>
      <input type="text" placeholder='e.g. 9:00am' {...props.input} />
      {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
    </div>
  )
}

const TextInput = props => {
  return(
    <div>
      <input type="text" {...props.input} />
      {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
    </div>
  )
}

const EventFields = props => {
  
  return(
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='day'>Day of Week</label>
      <Field name='day' component={DaySelect} />

      <label htmlFor='startTime'>Start Time:</label>
      <Field name='startTime' component={TimeField} />

      <label htmlFor='endTime'>End time:</label>
      <Field name='endTime' component={TimeField} />

      <label htmlFor='location'>Location:</label>
      <Field name='location' component={TextInput} />

      <label htmlFor='note'>Note:</label>
      <Field name='note' component={TextInput} />

      {props.error && <strong>{props.error}</strong>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default EventFields;
