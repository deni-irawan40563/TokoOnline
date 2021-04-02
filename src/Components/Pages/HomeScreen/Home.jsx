//Import-React:
import React, { Component } from 'react';

//Import-Style:
import './style.css';

//Import-Components:
import Navbar from '../../Template/Navbar/Navbar';
import HeaderLink from '../../Atoms/HeaderLink/HeaderLink';
import AsideBar from '../../Atoms/AsideBar/AsideBar';


//Main-Components:
export default class Home extends Component {
  state = {
    aside : false
  }
  handleSidebar = () => {
    if(this.state.aside === true){
      this.setState({
        aside : false
      })
    }else{
      this.setState({
        aside : true
      })      
    }
  }
  render() {
    return (
      <>
        <AsideBar isSidebar={this.state.aside} onClick={this.handleSidebar}/>
        <header id="headerPosition">
          <HeaderLink />
          <Navbar onClick={this.handleSidebar}/>          
        </header>
        <main>
          <h1>Hello World!</h1>
        </main>
      </>
    )
  }
}
