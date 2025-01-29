import React from "react";
import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import re from '../assets/react.png';
import node from '../assets/programing.png';
import mongo from '../assets/mongodb.svg';
import ex from '../assets/ex.png';
import py from '../assets/python.png';
import fig from '../assets/figma.png';
import boot from '../assets/bootstrap.png';

import './Skills.css';

const Skill = () => (
  <div id="skills" className="ski">
    <div className="skillsintro">
      <br />
      <br />
      <h1 style={{ color: 'white', fontSize: '48px' }}>
        My technical stack includes various technologies and tools
      </h1>
      <h2 style={{ color: '#fcae28' }}>
        Explore the technologies I utilize to drive innovation in my projects.
      </h2>
      <a href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"> <button className="btn">Connect Me</button></a>
    </div>
    <div className="cardlay">
      <div className="cards">
        <img src={html} alt="HTML5" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>95%</div>
        </div>
      </div>
      <div className="cards">
        <img src={css} alt="CSS3" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>95%</div>
        </div>
      </div>
      <div className="cards">
        <img src={js} alt="JavaScript" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>90%</div>
        </div>
      </div>
      <div className="cards">
        <img src={re} alt="React" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>95%</div>
        </div>
      </div>
      <div className="cards">
        <img src={node} alt="Node.js" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>90%</div>
        </div>
      </div>
      <div className="cards">
        <img src={ex} alt="Express.js" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>90%</div>
        </div>
      </div>
      <div className="cards">
        <img src={mongo} alt="MongoDB" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>95%</div>
        </div>
      </div>
      <div className="cards">
        <img src={py} alt="Python" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>95%</div>
        </div>
      </div>
      <div className="cards">
        <img src={fig} alt="Figma" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>90%</div>
        </div>
      </div>
      <div className="cards">
        <img src={boot} alt="Figma" />
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#fcae28' }}>95%</div>
        </div>
      </div>
    </div>
  </div>
);

export default Skill;
