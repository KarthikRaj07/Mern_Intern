import React from 'react';
import Navbar from './components/Naver.js'; 
import About from './components/About.js';
import Skill from './components/Skills.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import './App.css';

const App = () => (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />


    </div>
  
);

export default App;
