import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='aside'>
          <h2>Portfolio</h2>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#portfolio'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='logo'>
          <a href='/'><span>A</span>ttt</a> 
        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;