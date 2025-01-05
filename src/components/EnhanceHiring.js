import React from 'react';
import '../styles/EnhanceHiring.css';
import Hiring from '../Assets/images/hiring.png'
import Bgcard from '../Assets/images/bgcard.png';


const EnhanceHiring = () => {
  return (
    <div className="enhance-hiring-container">
     <div className="enhace-background"> 
      <img src={Bgcard} alt="Hiring Icon" className="enhanve-bg"/>
            </div>
             <div className="enhance-hiring-content">
        <div className="icon-container">
          <img
            src={Hiring}
            alt="Hiring Icon"
            className="hiring-icon"
          />
        </div>
        <h1 className="hiring-heading">Ready to enhance your hiring process?</h1>
        <button className="request-demo-button">Request A Demo</button>
      </div>
      <div className="enhace-background"> 
      <img src={Bgcard} alt="Hiring Icon" className="enhanve-bg"/>
            </div>
    </div>
  );
};

export default EnhanceHiring;
