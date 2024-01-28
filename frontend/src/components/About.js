import React from 'react';
import '../css/about.css';
import celebration from '../img/celebration.gif';
import logo2 from '../img/logo2.svg';
const About = () => {
  return (
    <div id="aboutBody">
                  <div className="naviBar">
                <nav className="dropdownmenu">
                    <ul>
                        <li><img className="naviCulture" src={logo2} alt="Logo" /></li>


                        <li>
                            <ul id="submenu">
                                <li><a className="navElements" href="projects">Menu</a></li>
                                <li><a className="navElements" href="addproject">add Project</a></li>
                                <li><a className="navElements" href="about">About</a></li>
                                <li><a className="navElements" href="register">Sign up</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <header className="normalHeader">
                    <img className="naviCulture" src={logo2} alt="Logo" />


                    <nav>
                        <ul>
                            <li><a className="navElements" href="projects">Menu</a></li>
                            <li><a className="navElements" href="addproject">add Project</a></li>
                            <li><a className="navElements" href="about">About</a></li>
                            <li><a className="navElements" href="register">Sign up</a></li>
                        </ul>
                    </nav>
                </header>
            </div>

      <div className="about-section">
        <p className="about-description">
          Welcome to our application dedicated to the world of vineyards! We are a group of
          wine culture enthusiasts eager to share our passion with people from every corner of the globe.
          Our application is an ideal platform for anyone fascinated by wine culture, offering insights
          into new wine regions, unique flavors, and the history of wine production. Dive into the captivating
          world of winemaking with us, and uncover the mysteries behind every bottle. Join our community
          today and embark on a memorable journey through the world's vineyards. Cheers!
        </p>

        <img id="champagne-celebration" src={celebration} alt="Leo" />
      </div>

      <footer>Copyright ©</footer>
    </div>
  );
};

export default About;