import React, { useEffect, useState, Component } from 'react';
import render from "react-dom";
import axios from 'axios';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


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
          </Routes>


      </div>
    </Router>
  );
}

export default App;