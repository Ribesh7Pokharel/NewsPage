import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from "./NavBar.js"
import Article from './Article.js'
import Tutorial from './Tutorial.js'
import Footer from './Footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Article />
    <Tutorial/>
    <Footer />
  </React.StrictMode>
);
