import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import '../styles/about.css'

function About() {
  document.title = "About | Esther Lu"
  return (
    <div id="about">
      <Logo />
      <h1>about</h1>
      <div className="about-text">
        <p>I believe technology is a unique conduit for meeting people's needs, and I love exploring the space where people and technology intersect. I'm a software developer at Workit Health, where I have the unique and awesome privilege of serving the recovery community by writing code.</p>
        <p>I have my B.S. and M.S. in computer engineering from the University of Michigan.</p>
        {/*<a>view resume</a>*/}
        <p>this page is a work in progress.</p>
      </div>

      <Footer />
    </div>
  );
}

export default About;