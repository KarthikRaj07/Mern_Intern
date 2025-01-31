import './App.css';
import About from './aboutP';
import Skill from './skill';
import Certificates from './Certificate';
import Project from './project';
import Education from './Education';
import { Home } from './Home';
import { Footer } from './Footer';


import ParticlesConfig
 from './component/config/particles.config';
import ParticaleBG from './component/ParticaleBackground.js';

function App() {
    return (
        <div>
           
          
            
                        <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#certificates">Certificates</a>
                <a href="#education">Education</a>
            </nav>

            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skill />
            </div>
            <div id="projects">
                <Project />
            </div>
            <div id="certificates">
                <Certificates />
            </div>
            <div id="education">
                <Education />
            </div>

            <Footer />
       
        </div> 
    );
}

export default App;
