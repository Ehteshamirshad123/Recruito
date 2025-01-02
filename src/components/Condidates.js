import React from "react";
import "../styles/Condidates.css";
import Alex from "../Assets/images/Alex.jpg";
import Ryan from "../Assets/images/Ryan.jpg";
import Rivera from "../Assets/images/Rivera.jpg";
import BGCARD from "../Assets/images/bgcard.png";
import Call from "../Assets/images/Call.png";

const candidates = [
  { name: "Ryan", rank: "Senior Graphic Designer", image: Ryan, score: "85%" },
  { name: "Alex Martin", rank: "Senior Graphic Designer", image: Alex, score: "92%" },
  { name: "Emma Rivera", rank: "Graphic Designer", image: Rivera, score: "80%" },
];

const Condidates = () => {
  return (
    <div className="recruitment-component">
      {/* Candidate Sourcing Section */}
      <div className="section">
        <div className="left-section">
          <h2>Candidate Sourcing & <br /> Job Posting</h2>
          <p>
            Recruito automatically posts your position or actively hunts top<br />
            candidates across multiple platforms. No human intervention<br />
            needed.
          </p>
        </div>
        <div className="candidate-cards">
          <img className="bg-cards" src={BGCARD} alt="Background" />
          {candidates.map((candidate, index) => (
            
            <div
              key={index}
              className={`candidate-card ${candidate.name === "Alex Martin" ? "highlighted" : ""}`}
            >
              <img src={candidate.image} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p>{candidate.rank}</p>
              <div className="skills">
                {candidate.name === "Ryan" && (
                  <>
                    <span>Creative Suite</span>
                    <span>Marketing</span>
                    <span>Canva</span>
                  </>
                )}
                {candidate.name === "Alex Martin" && (
                  <>
                    <span>Adobe Creative Suite</span>
                    <span>Figma</span>
                    <span>Typography</span>
                    <span>After Effects</span>
                  </>
                )}
                {candidate.name === "Emma Rivera" && (
                  <>
                    <span>Illustrator</span>
                    <span>Typography</span>
                    <span>Canva</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Screening Section */}
      <div className="second-section">
        <div className="filter">
          <img className="bg-box2" src={BGCARD} alt="Background" />
          <div className="resume-filter">
            {["approved", "pending", "rejected"].map((status, index) => (
              <div key={index} className={`resume-card ${status}`}>
                <div className="card">
                  <div className="card-left">Yes</div>
                  <div className="card-right">
                    <div className="card1"></div>
                    <div className="card2"></div>
                    <div className="card3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="left-text">
          <h2>Automated Resume <br /> Screening & Filtering</h2>
          <p>
            Our AI instantly sorts and prioritizes resumes, highlighting only<br />
            the strongest matches and discarding unqualified applicants.
          </p>
        </div>
      </div>

      {/* Online Assessment Section */}
      <div className="assessment-container">
        <div className="online-assessment">
        <div className="left-section">
          <h2>Online Assessment</h2>
          <p>
            Candidates complete a quick skill or behavioral test to validate<br/> their capabilities. This process is seamlessly integrated and fully<br/> automated.
          </p>
          </div>
          <div className="checklist">
          <img className="bg-cards" src={BGCARD} alt="Background" />
          <div className="checklist-status">
            <div className="check-item completed">1. Creative Design Skills Test</div>
            <div className="check-item completed">2. UX/UI Design Challenge</div>
            <div className="check-item completed">3. Problem-Solving Task</div>
            <div className="check-item">4. Trends Awareness Quiz Test</div>
            </div>
          </div>
        </div>

        {/* AI Video Interviews Section */}
        
      </div>
      <div className="ai-video-interviews">
      <div className="ai-interviews-left">
      <img className="bg-box2" src={BGCARD} alt="Background" />
         <div className="image-main">
          <div className="image-container">
            <img
              src={Call}
              alt="Interview"
              className="interview-image"
            />
            <div className="score-circle">
              <span>Interviews Score</span>
            </div>
          </div>
          </div>
          </div>
          <div className="left-text">

          <h2>AI Video Interviews</h2>
          <p>
            An AI-driven virtual interviewer conducts dynamic, adaptive<br/> interviews, capturing
            both technical insights and soft skills.<br/> Everything is entirely hands-free.
          </p>
          </div>
        </div>

      {/* Shortlist Section */}
      <div className="shortlist-container">
        <div className="left-section">
          <h2>Final Shortlist for the <br/>Line Manager</h2>
          <p>
            Recruito presents a curated list of the top performers, complete <br/> with interview recordings and evaluations, so you can make a <br/> swift, confident hiring decision.
          </p>
        </div>
        <div className="checklist">
        <img className="bg-cards" src={BGCARD} alt="Background" />
        <div className="shortlist-cards">
          {candidates.map((candidate, index) => (
            <div key={index} className="shortlist-card">
              <img src={candidate.image} alt={candidate.name} className="candidate-image" />
              <div className="candidate-details">
                <span className="candidate-name">{candidate.name}</span>
                <span className="candidate-rank">{candidate.rank}</span>
              </div>
              <div className="candidate-score">
                <span>{candidate.score}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Condidates;
