//Import-React:
import React from 'react'
//Import-Style:
import '../style.css'
//Import-Components:
import AuthForm from '../../../Molecules/AuthForm/AuthForm'


//Main-Components:
export default function RegisterCard() {
  return (
    <div id="auth-card">
      <AuthForm title="Buat Akun Baru" account={false}/>
    </div>
  )
}
