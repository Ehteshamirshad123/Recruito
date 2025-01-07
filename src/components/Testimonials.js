import React from "react";
import "../styles/Testimonials.css";
import Rivera from '../Assets/images/Rivera.jpg';
import Joe from '../Assets/images/joe.jpg'
import Alex from '../Assets/images/Alex.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Martin",
      role: "Company, HR",
      image: Alex, // Replace with actual image URL
      message:
        "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Company, Manager",
      image: Rivera, // Replace with actual image URL
      message:
        "Using Recruito AI has made hiring effortless. The recommendations are spot on, saving us valuable time and effort.",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Company, CEO",
      image: Joe, // Replace with actual image URL
      message:
        "Recruito is a game-changer. The insights provided are accurate, and the overall efficiency of the hiring process has drastically improved.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <h2>
        Don’t just take our word for it—see what our clients say about Recruito
        AI.
      </h2>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimation-detail">
              <div >
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="testimonial-image"
            />
            </div>
            <div>
            <h3>{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            </div>
            </div>
            <div className="testimonial-message">
            <p className="">{testimonial.message}</p>
            </div>
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
