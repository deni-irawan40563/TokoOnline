//Import-React:
import React from 'react';
import { Link } from 'react-router-dom';

//Import-Style:
import './style.css';

//Main-Components:
export default function DropDown({title, icon, content1, content2, content3, content4, content5, link1, link2, link3, link4, link5}) {
  if(icon){
    return (
      <div class="dropdown">
        <i class={title} />
        <div class="dropdown-content">
          <Link to={link1}>{content1}</Link>
          <Link to={link2}>{content2}</Link>
          <Link to={link3}>{content3}</Link>
          <Link to={link4}>{content4}</Link>
          <Link to={link5}>{content5}</Link>
        </div>
      </div> 
    )
  }
  return (
  <div class="dropdown">
    <div class="dropbtn">
      {title}
    </div>
    <div class="dropdown-content">
      <Link to={link1}>{content1}</Link>
      <Link to={link2}>{content2}</Link>
      <Link to={link3}>{content3}</Link>
      <Link to={link4}>{content4}</Link>
      <Link to={link5}>{content5}</Link>
    </div>
  </div> 
  )
}

DropDown.defaultProps = {
  title : null,
  content1 : null,
  content2 : null,
  content3 : null,
  content4 : null,
  content5 : null,
  icon : null
}