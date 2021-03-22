import React from 'react'
import '../style.css'

//import Molecules Components
import AuthForm from '../../../Molecules/AuthForm/AuthForm'

export default function RegisterCard() {
  return (
    <div id="auth-card">
      <AuthForm title="Buat Akun Baru" account={false}/>
    </div>
  )
}
