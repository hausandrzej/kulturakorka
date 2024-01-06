import React, { useEffect, useState } from 'react';
import '../css/projects.css';
import '../css/style.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/app/projects/")
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleDelete = async (projectId) => {
    try {
      await fetch(`http://localhost:8000/app/projects/delete/${projectId}/`, {
        method: 'DELETE',
      });
      setProjects(projects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project', error);
    }
  };

  return (
    <div>
      <div className="naviBar">
        <nav className="dropdownmenu">
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
              <img className="vineyardPhoto" src={project.file} alt="Vineyard" />
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="icons">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <i className="fa-regular fa-thumbs-down"></i>
                  <button onClick={() => handleDelete(project.id)} className="delete-btn">
                    Usuń
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

    </div>
  );
};

export default Projects;