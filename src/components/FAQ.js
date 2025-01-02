

import React, { useState } from "react";
import "../styles/FAQ.css";
import FAQImage from '../Assets/images/FAQ.png'

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is an AI Agent?",
      answer: `An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. 
      In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. 
      Key capabilities include:
      - Natural Language Processing to interpret resumes and candidate responses
      - Adaptive Learning to improve accuracy and efficiency over time
      - Task Automation to handle repetitive or time-consuming steps
      - Data-Driven Insights for better predictions and decisions`,
    },
    {
      question: "What are the Benefits of Using Recruito’s AI Agent?",
      answer: `The benefits include time-saving, improved accuracy in candidate screening, better insights for decision-making, and reduced manual workload.`,
    },
    {
      question: "Next Steps?",
      answer: `To get started, sign up for Recruito, set up your hiring preferences, and let the AI agent streamline your recruitment process.`,
    },
  ];

  return (
    <div className="faq-main">
    <img className="faq-image" src={FAQImage} alt="FAQ Background"/>
  
    <div className="faq-container">
      
      <button className="FAQ-Button">FAQs</button>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${open === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          <div className={`faq-answer ${open === index ? "show" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
