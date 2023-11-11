import React, { useState } from 'react';
import '../css/projects.css';
import '../css/style.css';
//import logo from '../../public/img/logo2.svg'; // Załaduj logo jako moduł

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
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
        // Logika obsługi wysyłania formularza, w tym przesłanie pliku
    };

    return (
        <div id="addProjectBody">
            <div className="naviBar">
                {/* Twoja nawigacja i header */}
            </div>

            <div className="hello">
                <br /><br />
                <h1>CorkCulture</h1>
                <h2>Out of love for wine.</h2>
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
                        <input className="inputform" type="file" name="file" onChange={handleChange} />
                        <button className="inputform" id="uploadbutton" type="submit">Dodaj Winnice</button>
                    </form>
                </section>
            </div>
            <footer>Copyright Â©</footer>
        </div>
    );
};

export default AddProject;