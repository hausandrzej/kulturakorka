import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/style.css';
import logo from '../img/logo.svg';


function Login() {
    const [messages, setMessages] = useState([]); // Zakładam, że będziesz chciał tu przechować jakieś komunikaty

    // Tu możesz dodać funkcje, które będą komunikować się z backendem

    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login Page</title>
                <link rel="stylesheet" type="text/css" href="/public/css/style.css" />

                <style>
                    {`
                        ::placeholder {
                            color: white;
                            font-size: 150%;
                        }
                    `}
                </style>
            </head>

            <body>
                <div className="container">
                    <div className="logo">
                        <img className="corkCulture" src={logo} alt="Logo" />
                    </div>

                    <div className="login-container">
                        <form className="Login" action="Login" method="POST">
                            <div className="messages">
                                {messages.map((message, index) => <div key={index}>{message}</div>)}
                            </div>
                            <input className="hell" name="email" type="text" placeholder="email@email.com" />
                            <input className="hell" name="password" type="password" placeholder="password" />
                            <button className="continue-button">
                                <a className="continue-link" href="projects">Continue</a>
                            </button>
                            <button className="continue-button">
                                <a className="continue-link" href="register">REGISTER</a>
                            </button>
                            <button className="login-button" type="submit">login</button>
                        </form>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Login;