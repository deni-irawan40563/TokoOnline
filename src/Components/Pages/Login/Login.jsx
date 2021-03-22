import React, { Component } from 'react'
import './style.css';

//Import Template
import LoginCard from '../../Template/Auth/LoginCard/LoginCard';

export default class Login extends Component {
  render() {
    return (
      <div id="login">
          <LoginCard />
      </div>
    )
  }
}
