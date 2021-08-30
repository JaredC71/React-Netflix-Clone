import React from "react";
import "../styles/LandingHero.css";
function LandingHero() {
  return (
    <div className="landingHeroContainer">
      <h1>Unlimited movies, Tv shows, and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="landingHeroInputContainer">
        <input type="text" placeholder="Email address"></input>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default LandingHero;
