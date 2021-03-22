import React from 'react';
import './style.css';

export default function Form({type, placeholder, label, value}) {
  return (
    <div id='form-container'>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} />
    </div>
  )
}

Form.defaultProps = {
  type : 'text',
  placeholder : null,
  label : null
}