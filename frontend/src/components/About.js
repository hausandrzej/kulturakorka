import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <div id="aboutBody">
      <header className="naviBar">
        <img className="logo" src="../img/logo2.svg" alt="Logo" />
        <input className="search-box" type="text" placeholder="Search Vineyards" />

        <nav>
          <ul className="nav-menu">
            <li><a className="nav-item" href="/projects">Menu</a></li>
            <li><a className="nav-item" href="/projects">Menu</a></li>
            <li><a className="nav-item" href="/addproject">Add Project</a></li>
            <li><a className="nav-item active" href="/about">About</a></li>
            <li><a className="nav-item" href="/register">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <div className="about-section">
        <p className="about-description">
          Welcome to our application dedicated to the world of vineyards! We are a group of
          wine culture enthusiasts eager to share our passion with people from every corner of the globe.
          Our application is an ideal platform for anyone fascinated by wine culture, offering insights
          into new wine regions, unique flavors, and the history of wine production. Dive into the captivating
          world of winemaking with us, and uncover the mysteries behind every bottle. Join our community
          today and embark on a memorable journey through the world's vineyards. Cheers!
        </p>

        <img id="champagne-celebration" src="public/img/celebration.png" alt="Celebrating with Champagne" />
      </div>

      <footer>Copyright ©</footer>
    </div>
  );
};

export default About;