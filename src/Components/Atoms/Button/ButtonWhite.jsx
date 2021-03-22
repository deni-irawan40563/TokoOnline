import React from 'react';
import './style.css';

export default function ButtonWhite({size, onClick, title, icon}) {
  return (
      <button id={size ? 'button-block-white' : 'button-white'} onClick={onClick}><i class={icon}></i> {title}</button>
  )
}
