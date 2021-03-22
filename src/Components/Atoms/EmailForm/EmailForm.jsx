import React from 'react'
import './style.css'

export default function EmailForm({placeholder, errorMessage, label, value}) {
  return (
    <div className="email-form">
      <label>{label}</label>
      <input type="email" value={value} id="email" placeholder={placeholder} required/>
      <small className='error-message'>{errorMessage}</small>
    </div>
  )
}

EmailForm.defaultProps = {
  placeholder : 'Masukan Email',
  errorMessage : 'Mohon Masukan Format Email yang Valid',
  label : 'email'
}