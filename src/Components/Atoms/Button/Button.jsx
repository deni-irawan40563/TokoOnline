import React from 'react'
import './style.css'

export default function Button({title, onClick, size, icon}) {
  return <button id={size === 'btn-block' ? 'button-block' : 'button'} onClick={onClick}><i class={icon}></i> {title}</button>
}

Button.defaultProps = {
  title : "tombol",
  onClick : null
}
