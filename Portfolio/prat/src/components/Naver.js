import React from 'react';
import './Naver.css';
import mk from '../assets/mk.jpg';
 
const Navbar = () => (
  <div className="navbar">
    <img src={mk} className="logo" alt="MK Logo" />
    <h1 id='title'>MK's<span id='sp'> Portfolio</span></h1>
    <nav>
      <ul>
        <li><a href="#home">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
