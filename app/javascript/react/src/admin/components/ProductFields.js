import React from 'react';
import { Field } from 'redux-form';

const GroupSelect = props => {

  return(
    <div className='row'>
      <select {...props.input}>
        <option value=''></option>
        <option value='food'>Food</option>
        <option value='drink'>Drink</option>
      </select>
      {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
    </div>
  )
}

const InputTextField = props => {
  return(
    <div>
      <input type="text" {...props.input} />
      {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
    </div>
  )
}

const ProductFields = props => {

  return(
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='title'>Title</label>
      <Field name='title' component={InputTextField} />

      <label htmlFor='description'>Description</label>
      <Field name='description' component={InputTextField} />

      <label htmlFor='group'>Group</label>
      <Field name='group' component={GroupSelect} />

      {props.error && <strong>{props.error}</strong>}
      <button className='product-submit-button'type='submit'>Submit</button>
    </form>
  )
}

export default ProductFields;
