import React from "react";
import "../styles/LandingBlocks.css";
function LandingPageBlocks() {
  return (
    <>
      <div className="block">
        <div className="blockText">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="blockImage">
          <video
            className="our-story-card-video"
            autoPlay
            muted=""
            loop=""
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>

      <div className="block">
        <div className="blockImage">
          <img
            alt=""
            className="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            data-uia="our-story-card-img"
          ></img>
        </div>
        <div className="blockText">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>

      <div className="block">
        <div className="blockText">
          <h1>Watch everywhere.</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
        </div>
        <div className="blockImage">
          <img
            alt=""
            className="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            data-uia="our-story-card-img"
          ></img>
        </div>
      </div>

      <div className="block">
        <div className="blockImage">
        <img alt="" className="our-story-card-img" src="https://occ-0-444-472.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" data-uia="our-story-card-img"></img>
        </div>
        <div className="blockText">
          <h1>Create profiles for kids.</h1>
          <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
    </>
  );
}

export default LandingPageBlocks;
