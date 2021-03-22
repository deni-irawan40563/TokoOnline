import React from 'react';
import './style.css';

export default function ButtonRed({size, onClick, title, icon}) {
  return (
      <button id={size ? 'button-block-red' : 'button-red'} onClick={onClick}><i class={icon}></i> {title}</button>
  )
}
