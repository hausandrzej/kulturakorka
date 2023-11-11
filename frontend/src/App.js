import React, { useEffect, useState, Component } from 'react';
import render from "react-dom";
import axios from 'axios';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Addproject from './components/Addproject';
import Projects from './components/Projects';



function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/api_test/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("Błąd podczas pobierania danych:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api_test" element={<p>{message}</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/addproject" element={<Addproject />} />

          </Routes>


      </div>
    </Router>
  );
}

export default App;