//Import-React:
import React from 'react';
//Import-Style:
import './style.css';


//Main-Components:
export default function SearchBar({type, placeholder, onClick}) {
  return (
    <form>
      <input type={type} id="search" name="search" placeholder={placeholder} onClick={onClick}/>
    </form>
  )
}

//Default-Props:
SearchBar.defaultProps = {
  type : 'text',
  placeholder: 'Cari...'
}
