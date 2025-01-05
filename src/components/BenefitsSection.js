import React from 'react';
import '../styles/BenefitsSection.css';
import BenBG from '../Assets/images/BenBG.png'
import Pencil from '../Assets/images/edit.svg'
import Cloud from '../Assets/images/cloud.svg'
import usericon from '../Assets/images/usericon.png'

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <div>
      <img className='Benifit-Bg-left' src={BenBG} alt="Background" />
      <img className='Benifit-Bg-right' src={BenBG} alt="Background" />
      </div>
      <button className="benifit-button">Benefits</button>
      <h2 className="title">Unlock the advantages of using<br/> Recruito AI for your hiring needs.</h2>
      <div className="benenits-cards">
        <div className="benenits-card">
        <div className="card-icon">
          <div className="icon">
          <img className='vector' src={Pencil} alt="Background" />
          </div>
          </div>
          <h3>Automate Processes</h3>
          <p>Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.</p>
        </div>
        <div className="benenits-card">
        <div className="card-icon">
          <div className="icon">
          <img className='vector' src={Cloud} alt="Background" />
          </div>
          </div>
          <h3>Provide Instant Information</h3>
          <p>Quickly access relevant candidate data, ensuring no talent is overlooked in your search.</p>
        </div>
        <div className="benenits-card">
          <div className="card-icon">
          <div className="icon">
          <img className="usericon" src={usericon} alt="Background" />
          </div>
          </div>
          <h3>Make Data-Driven Decisions</h3>
          <p>Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
