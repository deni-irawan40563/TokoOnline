//Import-React:
import React from 'react';
//Import-Style:
import './style.css';

//Import-Components:
import LinkListNavbar from '../../Molecules/LinkListNavbar/LinkListNavbar';
import UserListNavbar from '../../Molecules/UserListNavbar/UserListNavbar';
import BurgerMenu from '../../Atoms/BurgerMenu/BurgerMenu';
import Logo from '../../Logo/Logo';


//Main-Components:
export default function Navbar({onClick}) {
  return (
    <div id='navbar'>
      <div id="navbar-container">
          <Logo />
          <LinkListNavbar />
          <UserListNavbar />
      </div>
      <div id="mobileNavbar">
        <BurgerMenu onClick={onClick}/>
        <h1 id='logo-mobileNavbar'>TokoOnline</h1>
      </div>
    </div>
  )
}
