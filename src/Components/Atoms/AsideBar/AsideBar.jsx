//Import-React:
import React from 'react';
import { Link } from 'react-router-dom';

//Import-Components:
import Logo from '../../Logo/Logo';

//Import-Style:
import './style.css';

//Main-Components:
export default function AsideBar({onClick, isSidebar}) {
  return (
    <aside id={isSidebar ? 'sidebar' : 'sidebarNone'}>
      <p id="closeButton" onClick={onClick}>X</p>
      <div id="sidebarLink">
        <div id="logo">
          <Logo />
        </div>
        <Link to='/' id="userLogin"><i class="fas fa-user-circle userLogo"></i><br />Masuk</Link>
        <Link to='/'>Topi</Link>
        <Link to='/'>Baju</Link>
        <Link to='/'>Celana</Link>
        <Link to='/'>Blazer</Link>
        <Link to='/'>Aksesoris</Link>
        <Link to='/'>Sepatu</Link>
      </div>
    </aside>
  )
}
