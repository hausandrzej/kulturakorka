import React, { useEffect, useState } from 'react';
import '../css/projects.css';
import '../css/style.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Zakładam, że masz endpoint API do pobrania projektów
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <div className="naviBar">
        <nav className="dropdownmenu">
          <ul className="doFlex">
            <li><img className="naviCulture" src="../img/logo2.svg" alt="Logo" /></li>
            <li>
              <i className="fa-solid fa-bars"></i>
              <ul id="submenu">
                <li><a className="navElements" href="projects">Menu</a></li>
                <li><a className="navElements" href="addproject">add Project</a></li>
                <li><a className="navElements" href="about">About</a></li>
                <li><a className="navElements" href="">Sign up</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <header className="normalHeader">
          <img className="naviCulture" src="public/img/logo2.svg" alt="Logo" />
          <input className="szukacz" type="text" placeholder="Find vineyard" />
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

      <div className="hello">
        <br /><br />
        <h1>CorkCulture</h1>
        <h2>Out of love for wine.</h2>
      </div>

      <br /><br /><br />

      <div className="mainPage">
        <section className="projectsSection">
          {projects.map((project) => (
            <div key={project.id} className="vineyardSection">
              <img className="vineyardPhoto" src={`public/uploads/${project.image}`} alt="Vineyard" />
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="icons">
                  <i className="fa-regular fa-thumbs-up"> {project.like}</i>
                  <i className="fa-regular fa-thumbs-down"> {project.dislike}</i>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer>Copyright ©</footer>
    </div>
  );
};

export default Projects;
