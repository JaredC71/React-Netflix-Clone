import React from "react";
import LandingNav from "./LandingNav";
import "../styles/LandingJumbotron.css";
import LandingHero from "./LandingHero";
function LandingJumbotron() {
  return (
    
      <div className="landingJumbotronContainer">
          <div className="overlay">
        <LandingNav />
        <LandingHero />
      </div>
    </div>
  );
}

export default LandingJumbotron;
