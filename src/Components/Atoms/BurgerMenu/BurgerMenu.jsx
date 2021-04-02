//Import-React:
import React from 'react'

//Import-Style:
import './style.css'

//Main-Components:
export default function BurgerMenu({onClick}) {
  return (
    <div id="burgerMenu" onClick={onClick}>
      <div className="line"></div>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
  )
}
