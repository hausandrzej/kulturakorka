
import logo from '../img/logo.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Użyj useNavigate zamiast useHistory
import '../css/style.css';

const Register = () => {
    const navigate = useNavigate(); // Użyj useNavigate zamiast useHistory
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

        // Check if password and confirmedPassword match
        if (formData.password !== formData.confirmedPassword) {
            setMessages(['Password and confirmed password do not match']);
            return;
        }

        const response = await fetch('http://localhost:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            // Handle errors
            setMessages([data.message || 'Registration failed']);
        } else {
            // Successful registration logic here
            setMessages(['Registration successful']);

            // Redirect to the specified URL after successful registration
            navigate('/projects');
        }
    };

    return (
        <div className="container">
            <div className="logo">
                <img className="corkCulture" src={logo} alt="Logo" />
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