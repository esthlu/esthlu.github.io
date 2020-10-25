import React, { useState } from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ExperienceItem from '../components/ExperienceItem';
import '../styles/experience.css';

function Experience() {
  document.title = "Experience | Esther Lu"

  const items = [
    {title: "Software Developer, Workit Health", subtitle: "Jan 2019 — present", description: ["lorem ipsum", "lorem ipsum", "lorem ipsum"]},
    {title: "MSE, University of Michigan", subtitle: "Dec 2018"},
    {title: "Systems Engineer Intern, Northrop Grumman", subtitle: "May 2018 — Aug 2018", description: ["lorem ipsum", "lorem ipsum", "lorem ipsum"]},
    {title: "BSE, University of Michigan", subtitle: "Dec 2017"},
  ]

  return (
    <div id="experience">
      <Logo />
      <h1>experience</h1>
      <p><i>a work in progress</i></p>

      {/*items.map((item, i) => {
        return (
          <ExperienceItem item={item} key={i} isLast={i === (items.length-1)} />
        )
      })*/}

      <Footer />
    </div>
  );
}

export default Experience;
