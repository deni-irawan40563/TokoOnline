//Import-React:
import React from 'react';
//Import-Style:
import './style.css';


//Main-Components:
export default function ButtonWhite({size, onClick, title, icon, loading, loadingTitle}) {
  if(loading){
    return <button id={size === 'btn-block' ? 'button-block-disable' : 'button-disable'} onClick={onClick} disabled><i class="fas fa-sync-alt"></i> {loadingTitle}</button>
  }
  return <button id={size ? 'button-block-white' : 'button-white'} onClick={onClick}><i class={icon}></i> {title}</button>
}

//Default-Props:
ButtonWhite.defaultProps = {
  title : "tombol",
  onClick : null,
  loadingTitle: null
}