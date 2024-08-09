import React from 'react'
import './article.css';


const Component = ({ logo, title, link }) => {
    return (
      <div className="article-container" onClick={() => window.location.href = link}>
        <img src={logo} alt="Article Logo" className="article-logo" />
        <h2 className="article-title">{title}</h2>
      </div>
    );
  };
  
  export default Component;