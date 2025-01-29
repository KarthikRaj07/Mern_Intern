import React from "react";
import "./Project.css";
import adapt from "../assets/adapt.jpg";
import skin from "../assets/skin.png";
import turf from "../assets/turf.jpg";

const Project = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="project-row">
        <div className="project-image">
          <img src={adapt} alt="Adaptive Learning" />
        </div>
        <div className="project-content">
          <h1>Adaptive Learning</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint vero
            facere obcaecati minima sunt. Maxime doloribus alias nam sunt
            libero. 
          </p>
          <a
            href="https://github.com/MONISH-KANNA-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">View Project</button>
          </a>
        </div>
      </div>

      <div className="project-row reverse">
        <div className="project-content">
          <h1>Skin Disease</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            molestiae sequi numquam dignissimos nihil unde, error quod deleniti
            quasi consectetur!
          </p>
          <a
            href="https://github.com/MONISH-KANNA-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">View Project</button>
          </a>
        </div>
        <div className="project-image">
          <img src={skin} alt="Skin Disease" />
        </div>
      </div>

      <div className="project-row">
        <div className="project-image">
          <img src={turf} alt="Turf Booking" />
        </div>
        <div className="project-content">
          <h1>Turf Booking</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            iste quaerat! Rem, maxime tenetur? Deleniti quos iusto atque porro
            labore!
          </p>
          <a
            href="https://github.com/MONISH-KANNA-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
