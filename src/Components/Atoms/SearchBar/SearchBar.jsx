import React from 'react';
import './style.css';

export default function SearchBar({type, placeholder}) {
  return (
    <form>
      <input type={type} id="search" name="search"  />
    </form>
  )
}

SearchBar.defaultProps = {
  type : 'text',
  placeholder: 'Cari...'
}
