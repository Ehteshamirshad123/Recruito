import React from "react";
import DashboardImage from '../Assets/images/Dashborad.png';
import Chart1 from '../Assets/images/Chart1.png';
import Chart2 from '../Assets/images/Chart2.png';
import GSK from '../Assets/images/GSK.png';
import OGI from '../Assets/images/OGI.png';
import INT from '../Assets/images/INT.png';
import LINKEDIN from '../Assets/images/LINKEDIN.png';
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <div className="dashboard-content">
      <p>
        See How We Create An Autonomous{' '}
        <span className="ai-agent-link">
            <a href="your-link-here">AI Agent</a>
        </span>
    </p>
        <img className="Chart1" src={Chart1} alt="Chart1" />
        <img className="Chart2" src={Chart2} alt="Chart2" />
        <div className="Dashboard-image">
          <img src={DashboardImage} alt="DashboardImage" />
          </div>
        </div>
        
      <div className="trusted-container">
        <p>Trusted by the world leading organisations</p>
     <div className="logo-container"> 
      <img src={GSK} alt="GSk Logo" />
      <img src={OGI} alt="Oglivy Logo" />
      <img src={INT} alt="Intys Logo" />
      <img src={LINKEDIN} alt="LinkedIn Logo" />
      <img src={OGI} alt="Oglivy Logo" />
      <img src={GSK} alt="GSk Logo" />
      </div>
      <div className="advanced-features-section">
      <button className="features-button">Features</button>
      <h2 className="features-title">Streamline your recruitment with<br/> our advanced features</h2>
      {/* <div className="features-images">
        <img src={LeftImage} alt="Left Feature" className="left-image" />
        <img src={RightImage} alt="Right Feature" className="right-image" />
      </div> */}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
