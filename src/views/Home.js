import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile_img.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div id="home">
      <div className="top">
        <img src={profileImage} className="profile-picture" />

        <div className="name-container">
          <div className="underline" />
          <h1>esther lu</h1>
        </div>
      </div>

      <div className="links">
        <Link to="/about">about</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/experience">experience</Link>
      </div>
    </div>
  );
}

export default Home;
