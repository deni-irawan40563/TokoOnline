import React, { Component } from 'react';
import './style.css';

//Import Template Components
import Navbar from '../../Template/Navbar/Navbar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello World!</h1>
      </div>
    )
  }
}
