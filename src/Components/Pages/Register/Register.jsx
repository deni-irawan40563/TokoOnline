import React, { Component } from 'react'
import RegisterCard from '../../Template/Auth/RegisterCard/RegisterCard';
import './style.css';

export default class Register extends Component {
  render() {
    return (
      <div id="register">
        <RegisterCard title="buat akun" />
      </div>
    )
  }
}
