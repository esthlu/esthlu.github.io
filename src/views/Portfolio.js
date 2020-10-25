import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import PortfolioBox from '../components/PortfolioBox';
import '../styles/portfolio.css';

// images
import temp from '../assets/temp.png'

function Portfolio() {
  document.title = "Portfolio | Esther Lu"

  const items = [
    {title: "zoe toronto", image: temp, url: "#"},
    {title: "test project1", image: temp, url: "#"},
    {title: "test project2", image: temp, url: "#"},
    {title: "test project3", image: temp, url: "#"},
    {title: "test project4", image: temp, url: "#"},
    {title: "test project5", image: temp, url: "#"},
    {title: "test project6", image: temp, url: "#"},
    {title: "test project7", image: temp, url: "#"},
    {title: "test project8", image: temp, url: "#"},
  ]
  return (
    <div id="about">
      <Logo />
      <h1>portfolio</h1>
      <p><i>a work in progress</i></p>

      {/*<div className="flex-content">
        <div className="boxes">
          {items.map((item, i) => {
            let color = "blue"
            if ((i%9) === 1 || (i%9) === 3 || (i%9) === 8) {
              color = "cream"
            }
            if ((i%9) === 2 || (i%9) === 4 || (i%9) === 6) {
              color = "teal"
            }
            return (
              <PortfolioBox url={item.url}>
                <img src={item.image} />
                <div className={`color ${color}`} />
                <p className={(color === "blue") ? "white" : ""}>{item.title}</p>
              </PortfolioBox>
            )
          })}
        </div>
      </div>*/}
      <Footer />
    </div>
  );
}

export default Portfolio;
