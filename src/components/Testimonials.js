// src/components/Testimonials.js

import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Martin",
      role: "Company, HR",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      message:
        "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Company, Manager",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      message:
        "Using Recruito AI has made hiring effortless. The recommendations are spot on, saving us valuable time and effort.",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Company, CEO",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      message:
        "Recruito is a game-changer. The insights provided are accurate, and the overall efficiency of the hiring process has drastically improved.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <p>
        Don’t just take our word for it—see what our clients say about Recruito
        AI.
      </p>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-message">{testimonial.message}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Testimonials;
