import React from 'react';
import './style.css';

export default function ButtonGreen({size, onClick, title, icon}) {
  return (
      <button id={size ? 'button-block-green' : 'button-green'} onClick={onClick}><i class={icon}></i> {title}</button>
  )
}
