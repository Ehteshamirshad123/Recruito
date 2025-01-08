import React, { useEffect, useState } from "react";
import "../styles/Condidates.css";
import Alex from "../Assets/images/Alex.jpg";
import Ryan from "../Assets/images/Ryan.jpg";
import Rivera from "../Assets/images/Rivera.jpg";
import BGCARD from "../Assets/images/bgcard.png";
import Call from "../Assets/images/Call.png";
import Read from "../Assets/images/read.svg"
import ReadOrange from "../Assets/images/read-orange.svg"
import ReadBlue from "../Assets/images/read-blue.svg"
import Verified from "../Assets/images/verified.svg";
import Search from "../Assets/images/Search.svg";
const Condidates = () => {
const candidates = [
  { name: "Ryan Lee", rank: "Senior Graphic Designer", tag: "#1", image: Ryan, score: "85%" },
  { name: "Alex Martin", rank: "Senior Graphic Designer", tag: "#2", image: Alex, score: "92%" },
  { name: "Emma Rivera", rank: "Senior Graphic Designer", tag: "#2", image: Rivera, score: "80%" },
];

const [checklist, setChecklist] = useState([
  { id: 1, name: "Creative Design Skills Test", isChecked: true },
  { id: 2, name: "UX/UI Design Challenge", isChecked: true },
  { id: 3, name: "Problem-Solving Task", isChecked: true },
  { id: 4, name: "Trends Awareness Quiz Test", isChecked: false },
]);

const [styleProps, setStyleProps] = useState({
  radius: 60,
  percentage: "2rem",
  transform: "90 45",
  marks: "50%"
});

useEffect(() => {
  const handleResize = () => {
    console.log("setStyleProps:", setStyleProps);
    const screenWidth = window.innerWidth;

    if (screenWidth > 860) {
      setStyleProps({ radius: 60, percentage: "2rem", transform: "90 45", marks: "50%" });
    } else if (screenWidth <= 860 && screenWidth > 768) {
      setStyleProps({ radius: 50, percentage: "0.8rem", transform: "80 45", marks: "45%" });
    } else if (screenWidth <= 768 && screenWidth >= 600) {
      setStyleProps({ radius: 40, percentage: "0.5rem", transform: "70 45", marks: "34%" });
    } else if (screenWidth < 600 && screenWidth > 480) {
      setStyleProps({ radius: 25, percentage: "0.5rem", transform: "60 45", marks: "32%" });
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, []);



const Circle = ({ colour, pct, radius }) => {
  const r = radius; // Radius of the circle
  const circ = 2 * Math.PI * r; // Circumference
  const strokePct = ((100 - pct) * circ) / 100; // Stroke offset for the progress

  return (
    <circle
      r={r}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? colour : "transparent"} // Stroke color for progress
      strokeWidth="10"
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0} // Stroke offset based on percentage
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  const screenWidth = window.innerWidth;
  const fontSize = screenWidth <= 600 ? "1rem" : "1.5rem";
  const fontWeight = screenWidth <= 600 ? "normal" : "bold";
  
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize={fontSize}
      fill="#1BD1C2"
      fontWeight={fontWeight}
    >
      {percentage}%
    </text>
  );
};


 // Handle checkbox toggle
 const handleCheck = (id) => {
  setChecklist((prevChecklist) =>
    prevChecklist.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    )
  );
};

  return (
    <div className="recruitment-component">
      {/* Candidate Sourcing Section */}
      
      <div className="section">
      <img className="bg-recruitment" src={BGCARD} alt="Background" />
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
             {candidate.name === "Alex Martin" && <img src={Verified} alt="Verified" className="verified-badge" />}
              <img src={candidate.image} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p>{candidate.rank}</p>
              <div className="skills">
                {candidate.name === "Ryan Lee" && (
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
          <div className="list-container">
          <img className="bg-box2" src={BGCARD} alt="Background" />
      <div className="list-item">
        <div className="icon green"> <img className="" src={Read} alt="Background" /></div>
        <div className="content">
        <div className="line long"></div>
          <div className="line short"></div>
          <div className="line short"></div>
        </div>
      </div>
      <div className="list-item1">
        <div className="icon orange"> <img className="" src={ReadOrange} alt="Background" /></div>
        <div className="content">
          <div className="line long"></div>
          <div className="line short"></div>
          <div className="line short"></div>
        </div>
      </div>
      <div className="list-item2">
        <div className="icon blue"> <img className="" src={ReadBlue} alt="Background" /></div>
        <div className="content">
        <div className="line long"></div>
          <div className="line short"></div>
          <div className="line short"></div>
        </div>
      </div>
      <img src={Search} alt="Search" className="interview-Search" />

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
          {checklist.map((item) => (


<div key={item.id} className={`check-item ${item.isChecked ? "completed" : ""}`}>
          <label>
            <input
              type="checkbox"
             className={`check-input ${item.isChecked ? "checked" : ""}`}
              checked={item.isChecked}
              onChange={() => handleCheck(item.id)}
            />
            {`${item.id}. ${item.name}`}
          </label>
        
</div>  
      ))}
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
        <img src={Call} alt="Interview" className="interview-image" />
        <div className="score-circle">
          <span className="score-label">Interview Score</span>
          <svg width={"15vw"} height={"30vh"}>
            {/* Background Circle */}
            <Circle colour="#E6E6E6" pct={100} radius={styleProps.radius} />
            {/* Progress Circle */}
            <Circle colour="#1BD1C2" pct={90} radius={styleProps.radius} />
            {/* Text Inside Circle */}
            <Text percentage={98} />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="left-text">
    <h2>AI Video Interviews</h2>
    <p>
      An AI-driven virtual interviewer conducts dynamic, adaptive<br />
      interviews, capturing both technical insights and soft skills.<br />
      Everything is entirely hands-free.
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
        <div className="shortlist-container">
        <div className="shortlist-cards">
        <img className="bg-cards" src={BGCARD} alt="Background" />
          {candidates.map((candidate, index) => (
            <div className="candidate-detail">
              <div>
            <img src={candidate.image} alt={candidate.name} className="candidate-image" />
            </div>
            <div key={index} className="shortlist-card">
              
              <div className="candidate-details">
                <span className="candidate-name">{candidate.name}</span>
                <span className="candidate-rank">{candidate.tag}</span>
              </div>
              <div className="candidate-score">
                <span>{candidate.score}</span>
              </div>
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
