import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import logo from '../img/logo.svg';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/token/', { username, password });

            if (response.data.access) {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
                navigate('/projects'); // Przekierowanie do odpowiedniej strony po zalogowaniu
            } else {
                setMessages(["Nie udało się zalogować. Spróbuj ponownie."]);
            }
        } catch (error) {
            setMessages(["Błąd podczas logowania. Spróbuj ponownie."]);
        }
    };

    return (
        <div className="container">
            <div className="logo">
                <img className="corkCulture" src={logo} alt="Logo" />
            </div>

            <div className="login-container">
                <form className="Login" onSubmit={handleSubmit}>
                    <div className="messages">
                        {messages.map((message, index) => <div key={index}>{message}</div>)}
                    </div>
                    <input
                        className="hell"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="hell"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button" type="submit">Login</button>

                    <button className="continue-button">
                        <a className="continue-link" href="/projects">Continue</a>
                    </button>
                    <button className="continue-button">
                        <a className="continue-link" href="/register">REGISTER</a>
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;
