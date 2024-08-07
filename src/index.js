import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar.js'
import Article from './Article.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <h1> SIT313 - Developing Client-Server Web Applications</h1>
    <Article />
  </React.StrictMode>
);
