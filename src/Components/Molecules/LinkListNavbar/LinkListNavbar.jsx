//Import-React:
import React from 'react';

//Import-Components:
import DropDown from '../../Atoms/DropDown/DropDown';

//Import-Style:
import './style.css';

//Main-Components:
export default function LinkListNavbar() {
  return (
  <div id="link-list">
    <DropDown
      title="Topi"
      content1="Visor Cap"
      content2="Cowboy Hat"
      content3="Flat Cap"
      content4="Baseball Hat"
    />
    <DropDown
      title="Baju"
      content1="Kaos"
      content2="Rompi"
      content3="Jaket"
      content4="Kemeja"
      content5="Sweater"
    />
    <DropDown
      title="Celana"
      content1="Jogger"
      content2="Skinny Fit"
      content3="Chinos"
      content4="Cargo"
      content5="Drawstring"
    />
    <DropDown
      title="Blazer"
      content1="Single Breasted"
      content2="Double Breasted"
      content3="Dinner suits"
      content4="Mandarin Suits"
    />
    <DropDown
      title="Aksesoris"
      content2="Kacamata"
      content3="Ikat Pinggang"
      content4="Gelang"
      content5="Cincin"
    />
    <DropDown
      title="Sepatu"
      content1="Sepatu Boat"
      content2="Sepatu Oxford"
      content3="Sepatu Derby"
      content4="Sepatu Brogue"
      content5="Sepatu Monk-Strap"
    />
    <DropDown
      title="Sendal"
      content1="Sandal Jepit"
      content2="Sandal Gunung"
      content3="Sandal Clog"
      content4="Sandal Teva"
      content5="Sandal Birkenstock"
    />
  </div>
  )
}
