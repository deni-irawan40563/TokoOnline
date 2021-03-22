import React from 'react'
import '../style.css'

//import Molecules Components
import AuthForm from '../../../Molecules/AuthForm/AuthForm'

export default function LoginCard() {
  return (
    <div id="auth-card">
      <AuthForm title="Masuk" account={true}/>
    </div>
  )
}
