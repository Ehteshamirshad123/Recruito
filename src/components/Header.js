import React from 'react';
import '../styles/Header.css';
import logo from '../Assets/images/Logo.svg';
const Header = () => {
  return (
    <header className="header">
      <div>
  <img className="logo" src={logo} alt="Recruito Logo" />
</div>
      <nav>
        <ul className="nav-links">
          <li><a className="home" href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#resource">Resource</a></li>
        </ul>
      </nav>
      <button className="contact-button">Contact Us</button>
    </header>
  );
};

export default Header;
