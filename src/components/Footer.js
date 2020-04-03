import React from 'react';
import { Link } from 'react-router-dom';
import layout from '../styles/layout.css';

function Footer() {
  return (
    <div id="footer">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/experience">experience</Link>
    </div>
  );
}

export default Footer;
