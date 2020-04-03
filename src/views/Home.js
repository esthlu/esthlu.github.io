import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout.css';

function Home() {
  return (
    <div id="home">
      <h1>esther lu</h1>
      <div className="links">
        <Link to="/about">about</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/experience">experience</Link>
      </div>
    </div>
  );
}

export default Home;
