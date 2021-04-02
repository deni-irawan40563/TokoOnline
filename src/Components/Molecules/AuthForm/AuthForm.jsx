//Import-React:
import React from 'react';
import {Link} from 'react-router-dom';

//Import-Style:
import './style.css';

//Import-Components:
import EmailForm from '../../Atoms/EmailForm/EmailForm';
import Form from '../../Atoms/Form/Form';
import Button from '../../Atoms/Button/Button';
import ButtonBlue from '../../Atoms/Button/ButtonBlue';
import ButtonRed from '../../Atoms/Button/ButtonRed';


//Main-Components:
export default function AuthForm({title, account}) {
  return (
      <div>
        <h1 id="auth-title">{title}</h1>
        <h4 id="new-account-title">{account ? 'belum punya akun ' : 'sudah punya akun '} ? <Link to={account ? '/register' : '/login'} id="new-account-link">buat akun</Link></h4>
        <EmailForm />
        <Form placeholder="Masukan Password" type="password" className="passwordForm" />
        <div id="button-group-auth">
          <div className="login-button">
            <Button title={account ? 'Masuk' : 'Buat Akun'} />
          </div>
          <div className="border-auth">
            <small>atau</small>
          </div>
          <div id="other-login-btn">
              <ButtonRed title="login with google" size="btn-block" icon="fab fa-google" />
              <ButtonBlue title="login with facebook" size="btn-block" icon="fab fa-facebook-f"/>
          </div>
        </div>
      </div>
  )
}
