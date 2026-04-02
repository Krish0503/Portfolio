import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (IT)</h4>
                <h5>MCKV Institute of Engineering</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              CGPA: 9.34/10. Completed NPTEL certifications in Java, Enhancing Soft Skills, Integrated Personality Development, Nurturing Innovation, and TCS iON Career Edge.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant</h4>
                <h5>Code for Change, NSHM Durgapur</h5>
              </div>
              <h3>03/25</h3>
            </div>
            <p>
              Built the frontend of a healthcare web application with React.js. Designed interactive symptom checker UI, health monitoring dashboards, and an AI-based chatbot.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary & Secondary</h4>
                <h5>Shree Jain Vidyalaya</h5>
              </div>
              <h3>PAST</h3>
            </div>
            <p>
              Higher Secondary Percentage: 76/100. Secondary Percentage: 80/100.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
