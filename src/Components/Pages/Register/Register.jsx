//Import-React:
import React, { Component } from 'react'
//Import-Style:
import './style.css';
//Import-Components:
import RegisterCard from '../../Template/Auth/RegisterCard/RegisterCard';


//Main-Components:
export default class Register extends Component {
  render() {
    return (
      <div id="register">
        <RegisterCard title="buat akun" />
      </div>
    )
  }
}
