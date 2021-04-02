//Import-React:
import React from 'react'
//Import-Style:
import '../style.css'
//Import-Components:
import AuthForm from '../../../Molecules/AuthForm/AuthForm'


//Main-Components:
export default function LoginCard() {
  return (
    <div id="auth-card">
      <AuthForm title="Masuk" account={true}/>
    </div>
  )
}
