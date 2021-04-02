//Import-React:
import React from 'react'

//Import-Style:
import './style.css'


//Main-Components:
export default function Button({title, onClick, size, icon, loading, loadingTitle}) {
  if(loading){
    return <button id={size === 'btn-block' ? 'button-block-disable' : 'button-disable'} onClick={onClick} disabled><i class="fas fa-sync-alt"></i> {loadingTitle}</button>
  }
  return <button id={size === 'btn-block' ? 'button-block' : 'button'} onClick={onClick}><i class={icon}></i> {title}</button>
}

//Default-Props:
Button.defaultProps = {
  title : "tombol",
  onClick : null,
  loadingTitle: null
}
