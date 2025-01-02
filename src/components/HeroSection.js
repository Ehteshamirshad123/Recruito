import React from 'react';
import "@fontsource/instrument-sans";
import '../styles/HeroSection.css';
import BG from '../Assets/images/bgbox.png';
import BGBOX from '../Assets/images/bgbox1.png';
const HeroSection = () => {
  return (
    <section className="hero">
               <img className="bgbox" src={BG} alt="BgBox" />
               <img className="bgboxleft" src={BGBOX} alt="BgBox" />

      <h1>Revolutionize Your Hiring<br/> Process with <span className="highlight">Recruito AI</span></h1>
      <p>Your fully automated hiring assistant that sources, screens,<br/> and interviews candidates effortlessly.</p>
      <div className="cta-buttons">
        <button className="cta-primary">Start Your Free Trial</button>
        <button className="cta-secondary">Request A Demo</button>
      </div>
    </section>
  );
};

export default HeroSection;
