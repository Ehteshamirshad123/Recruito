import React, { useEffect, useState } from "react";
import "../styles/Condidates.css";
import Alex from "../Assets/images/Alex.jpg";
import Ryan from "../Assets/images/Ryan.jpg";
import Rivera from "../Assets/images/Rivera.jpg";
import BGCARD from "../Assets/images/bgcard.png";
import Call from "../Assets/images/Call.png";
import Read from "../Assets/images/read.svg"
import Verified from "../Assets/images/verified.svg"
const Condidates = () => {


const [radius,setradius]=useState();
const [percentage,setpercentage]=useState();
const [transform,settransform]=useState();
const [marks,setmarks]=useState();


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

useEffect(()=>
{

  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    console.log(`Screen Width: ${screenWidth}, Screen Height: ${screenHeight}`);
     if( screenWidth>860)
      {
        setradius(60)
        setpercentage("2rem")
        settransform("90 45")
        setmarks("50%")
      }
    else if (screenWidth < 860 && screenWidth>768 ) {
      setradius(40)
      setpercentage("0.8rem")
      settransform("75 45")
      setmarks("35%")
    } else if( screenWidth<=768 && screenWidth>=600)
    {
      setradius(40)
      setpercentage("0.5rem")
      settransform("70 45")
      setmarks("34%")
    }
    else if( screenWidth<600 && screenWidth>480)
      {
        setradius(30)
        setpercentage("0.25rem")
        settransform("60 45")
        setmarks("32%")
      }
  });
},[])


const Circle = ({ colour, pct }) => {
  const r = radius||60;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={50}
      cy={50}
      
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="square"

    ></circle>
  );
};
const Text = ({ percentage1,percentage,marks }) => {
  return (
    <text
      x={marks}
      y="40%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={percentage}
    >
      {percentage1.toFixed(0)}%
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
        <div className="icon orange"> <img className="" src={Read} alt="Background" /></div>
        <div className="content">
          <div className="line long"></div>
          <div className="line short"></div>
          <div className="line short"></div>
        </div>
      </div>
      <div className="list-item2">
        <div className="icon blue"> <img className="" src={Read} alt="Background" /></div>
        <div className="content">
        <div className="line long"></div>
          <div className="line short"></div>
          <div className="line short"></div>
        </div>
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
            <img
              src={Call}
              alt="Interview"
              className="interview-image"
            />
            <div className="score-circle">
          
            <span>Interviews Score</span>
             

              
              <svg width={200} height={200}>
      <g transform={`rotate(-90 ${transform})`}>
        <Circle colour="lightgrey" />
        <Circle colour={'#1BD1C2'} pct={55} />
      </g>
      <Text percentage1={98} percentage={percentage} marks={marks}/>
    </svg>
             

             
            
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
                <span className="candidate-rank">{candidate.tag}</span>
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
