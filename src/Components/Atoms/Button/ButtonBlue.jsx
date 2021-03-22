import React from 'react';
import './style.css';

export default function ButtonRed({size, onClick, title, icon}) {
  return (
      <button id={size ? 'button-block-blue' : 'button-blue'} onClick={onClick}><i class={icon}></i> {title}</button>
  )
}
