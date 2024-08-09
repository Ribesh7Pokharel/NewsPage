import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from "./NavBar.js"
import Footer from './Footer.js'
import logo from './logo.svg'
import logo2 from './logo2.png'
import Component from './Article.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <h2>Featured Articles</h2>
    <div className="articles-container">
    <Component
        logo={logo}
        title="Create Your First Component"
        link="https://react.dev/learn/your-first-component" // External link
      />
      <Component
        logo={logo}
        title="Learn To Import and Export in React"
        link="https://react.dev/learn/importing-and-exporting-components" // External link
      />
      <Component
        logo={logo}
        title="Write and Learn JSX"
        link="https://react.dev/learn/writing-markup-with-jsx" // External link
      />
      </div>
      <h2>Featured Tutorials</h2>
      <div className="articles-container">
    <Component
        logo={logo2}
        title="Learn React"
        link="https://www.youtube.com/watch?v=SqcY0GlETPk" // External link
      />
      <Component
        logo={logo2}
        title="Create a Component"
        link="https://www.youtube.com/watch?v=PraIL031lno" // External link
      />
      <Component
        logo={logo2}
        title="Learn JSX"
        link="https://www.youtube.com/watch?v=pIpzObwzJqo" // External link
      />
      </div>
    {/* <Footer /> */}
  </React.StrictMode>
);