import React from 'react';
import './style.css';

//Import Atoms Components
import SearchBar from '../../Atoms/SearchBar/SearchBar';


export default function Navbar({countCart}) {
  return (
    <div id='navbar'>
      <div id="navbar-container">
        <h1 id='logo-navbar'>Toko Online</h1>
        <div id="link-list">
          <p>Celana</p>
          <p>Kemeja</p>
          <p>Kaos</p>
          <p>Jaket</p>
          <p>Blazer</p>
          <p>Sepatu</p>
          <p>sendal</p>
          <p>aksesoris</p>
        </div>
        <div id="user-list">
        <i className="fa fa-shopping-cart"><span id='count-cart'>{countCart}</span></i>
          <i className="fa fa-user"></i>
          <div id='search-bar'>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  countCart : 0
}