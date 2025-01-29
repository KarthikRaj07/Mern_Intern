import React from "react";
import './About.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Photo from '../assets/photo.jpg';

const About = ({ darkMode }) => {
  return (
    <div id="home" className={darkMode ? 'dark' : 'light'}>
      <div className="icons">
        <a href="https://github.com/MONISH-KANNA-M" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://x.com/MonishKanna24" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
      </div>
      <div className="about">
        <div className="about-content">
          <h1 className="about-title">Hi, I'm <span style={{ fontSize: 'larger' }}>Monish</span>👋</h1>
          <br />
          <br />
          <p className="about-description">I'm a passionate Full Stack Developer, Machine Learning Enthusiast, and Data Analyst.</p>
          <p className="about-description">I create innovative solutions that blend technology with creativity to solve real-world problems.</p>
          <a href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><button className="btn">Hire Me</button></a>
        </div>
        <div className="anime">
          <img src={Photo} alt="Monish" className="myimg" onError={(e) => e.target.src = 'fallback.jpg'} />
        </div>
      </div>
    </div>
  );
};

export default About;
