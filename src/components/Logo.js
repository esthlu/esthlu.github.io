import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/layout.css';

function Logo() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} className="logo-home" alt="esther lu logo" />
      </Link>
    </nav>
  );
}

export default Logo;
