//Import-React:
import React from 'react';
import {Link} from 'react-router-dom'

//Import-Components:
import SearchBar from '../../Atoms/SearchBar/SearchBar';

//Import-Style:
import './style.css';

//Main-Components:
export default function UserListNavbar({countCart}) {
  return (
    <div id="user-list">
      <i className="fa fa-shopping-cart"><span id='count-cart'>{countCart}</span></i>
      <Link to='/login' className="linkNav">
        <i className="fa fa-user"></i>
      </Link>
      <div id='search-bar'>
        <SearchBar />
      </div>
    </div>
  )
}

//Default-Props:
UserListNavbar.defaultProps = {
  countCart : 0
}