import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

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
  const TileButton = styled.button`
    width: 75px;
    padding: 7px 0;
    background-color: lightgrey;
    margin: 5px 0;

    &:hover {
      background-color: linen;
    }
  `;

  let cancelButton
  if(props.initialValues){
    cancelButton = <button className='cancel-edit-button' onClick={props.cancelEdit}>Cancel</button>
  }
  return(
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='title'>Title</label>
      <Field name='title' component={InputTextField} />

      <label htmlFor='description'>Description</label>
      <Field name='description' component={InputTextField} />

      <label htmlFor='group'>Group</label>
      <Field name='group' component={GroupSelect} />

      {props.error && <strong>{props.error}</strong>}
      <TileButton className='product-submit-button'type='submit'>Submit</TileButton>
      {cancelButton}
    </form>
  )
}

export default ProductFields;
