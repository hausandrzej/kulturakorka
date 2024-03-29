import React, { useState } from 'react';
import '../css/projects.css';
import '../css/style.css';
import logo2 from '../img/logo2.svg';
const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        file: null
    });
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        if (e.target.name === 'file') {
            setFormData({ ...formData, file: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('tags', formData.tags);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            const response = await fetch('http://localhost:8000/app/addProject/', {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setMessages([...messages, 'Projekt dodany pomyślnie']);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...messages, 'Wystąpił błąd podczas dodawania projektu']);
        }
    };

    return (
        <div id="addProjectBody">
            <div className="hello">
                <br /><br />
                <h1>CorkCulture</h1>
                <h2>Out of love for wine.</h2>
            </div>

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

            <div className="uploadsection">
                <section className="addProjectSection">
                    <h3 className="inputform">UPLOAD</h3>
                    <form className="addProjectForm" onSubmit={handleSubmit} encType="multipart/form-data">
                        {messages.length > 0 && (
                            <div>
                                {messages.map((message, index) => (
                                    <p key={index}>{message}</p>
                                ))}
                            </div>
                        )}
                        <input className="inputform" name="title" type="text" placeholder="title" onChange={handleChange} />
                        <textarea className="inputform" name="description" rows="5" placeholder="description" onChange={handleChange}></textarea>
                        <input className="inputform" name="tags" type="text" placeholder="tags (separated by commas)" onChange={handleChange} />
                        <input className="inputform" type="file" name="file" onChange={handleChange} />
                        <button className="inputform" id="uploadbutton" type="submit">Dodaj Winnice</button>
                    </form>
                </section>
            </div>

            <footer>
                footer
            </footer>
        </div>
    );
};

export default AddProject;
