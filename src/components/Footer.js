import React from 'react';
import '../styles/Footer.css'; 
import Logo from '../Assets/images/Logo.svg';
import X from '../Assets/images/twitter.png';
import Instagram from '../Assets/images/instagram.svg';
import Facebook from '../Assets/images/facebook.svg';
import In from '../Assets/images/In.svg'



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Brand Name */}
        <div className="footer-logo">
            <div>
          <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div>
          <p>© 2024 Recruito AI. All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="Footer-Logos">
        <img src={X} alt="Tiwitter" className="" />
        <img src={Instagram} alt="Instagram" className="" />
        <img src={Facebook} alt="Facebook" className="" />
        <img src={In} alt="LinkedIn" className="" />
        </div>
        <div className="footer-terms">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>

        </div>
    </footer>
  );
};

export default Footer;
