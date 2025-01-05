import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection'
import Dashboard from "./components/Dashboard";
import Condidates from "./components/Condidates";
import BenefitsSection from "./components/BenefitsSection";
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials'
import EnhanceHiring from './components/EnhanceHiring';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Dashboard/>
      <Condidates/>
      <BenefitsSection/>
      <FAQ/>
      <Testimonials/>
      <EnhanceHiring/>
      <Footer/>
      </div>
  );
}

export default App;
