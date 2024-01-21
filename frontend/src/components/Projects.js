import React, { useEffect, useState } from 'react';
import '../css/projects.css';
import '../css/style.css';
import logo2 from '../img/logo2.svg';
const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:8000/app/projects/")
      .then(response => response.json())
      .then(data => {
        setAllProjects(data);
        setDisplayedProjects(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const filteredProjects = allProjects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedProjects(filteredProjects);
  };

  const handleDelete = async (projectId) => {
    try {
      await fetch(`http://localhost:8000/app/projects/delete/${projectId}/`, {
        method: 'DELETE',
      });
      setAllProjects(allProjects.filter(project => project.id !== projectId));
      setDisplayedProjects(displayedProjects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project', error);
    }
  };

  return (
    <div>
      <div className="naviBar">
        <nav className="dropdownmenu">
          <ul className="doFlex">
            <li><img className="naviCulture" src={logo2} alt="logo" /></li>
            <li>
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
          <img className="naviCulture" src={logo2} alt="Logo" />
          <input
            className="szukacz"
            type="text"
            placeholder="Find vineyard"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearchKeyPress}
          />
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
          {displayedProjects.map((project) => (
            <div key={project.id} className="vineyardSection projectItem">
              <img className="vineyardPhoto" src={project.file} alt="Vineyard" />
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags && project.tags.map(tag => (
                    <span key={tag.name} className="project-tag">{tag.name}</span>
                  ))}
                </div>
                <div className="icons">
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
