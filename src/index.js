import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from'./NavBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <h1> SIT313 - Developing Client-Server Web Applications</h1>
  </React.StrictMode>
);
