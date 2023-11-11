import React, { useState } from 'react';
import '../css/style.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmedPassword: '',
        name: '',
        surname: '',
        phone: ''
    });
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logika obsługi wysyłania formularza
        // Możesz tutaj wykonać walidację, wysłać dane do serwera itp.
    };

    return (
        <div className="container">
            <div className="logo">
                <img className="corkCulture" src="public/img/logo.svg" alt="Logo" />
            </div>
            <div className="login-container">
                <form className="login" onSubmit={handleSubmit}>
                    {messages.length > 0 && (
                        <div className="messages">
                            {messages.map((message, index) => (
                                <p key={index}>{message}</p>
                            ))}
                        </div>
                    )}
                    <input className="hell" name="email" type="text" placeholder="email@email.com" onChange={handleChange} />
                    <input className="hell" name="password" type="password" placeholder="password" onChange={handleChange} />
                    <input className="hell" name="confirmedPassword" type="password" placeholder="confirm password" onChange={handleChange} />
                    <input className="hell" name="name" type="text" placeholder="name" onChange={handleChange} />
                    <input className="hell" name="surname" type="text" placeholder="surname" onChange={handleChange} />
                    <input className="hell" name="phone" type="text" placeholder="phone" onChange={handleChange} />
                    <button className="login-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;