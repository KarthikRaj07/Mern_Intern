// component/ParticaleBackground.js
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./config/particles.config";

const ParticaleBG = () => {
  const particlesInit = async (main) => {
    // Initialize tsParticles instance
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={require("./config/particles.config")}
    />
  );
};

export default ParticaleBG;
