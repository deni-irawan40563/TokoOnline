//Import-React:
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Import-Style:
import './index.css';
//Import-Components:
import Route from './Configs/Routes';

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
