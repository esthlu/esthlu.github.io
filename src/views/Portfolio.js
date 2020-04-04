import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

function Portfolio() {
  document.title = "Portfolio | Esther Lu"
  return (
    <div id="about">
      <Logo />
      <h1>portfolio</h1>
      <p>a work in progress</p>
      <Footer />
    </div>
  );
}

export default Portfolio;
