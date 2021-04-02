//Import-React:
import React, { Component } from 'react'
//Import-Style:
import './style.css';

//Import-Components:
import LoginCard from '../../Template/Auth/LoginCard/LoginCard';


//Main-Components:
export default class Login extends Component {
  render() {
    return (
      <div id="login">
          <LoginCard />
      </div>
    )
  }
}
