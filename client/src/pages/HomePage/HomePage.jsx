import React, { useState } from "react";
import "./HomePage.css";

export default function HomePage() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (event) => {
    const selectedSkill = event.target.value;
    if (selectedSkill !== "Skills" && !selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };

  const handleClear = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="container--main">
      <div className="navbar">
        <h1 className="heading">JobFinder</h1>
        <div className="buttons">
          <button className="login-btn">LogIn</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
      <div className="job-search">
        <div className="search-box">
          <div className="input-box">
            <input
              type="text"
              placeholder="Search for jobs"
              className="search-input"
            />
          </div>
          <div className="skills-section">
            <div>
              <select className="skills-dropdown" onChange={handleSkillChange}>
                <option value="Skills">Skills</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="Express">Express</option>
                <option value="MongoDB">MongoDB</option>
                <option value="TypeScript">TypeScript</option>
              </select>
            </div>
            <div className="selected-skills">
              {selectedSkills.length > 0 ? (
                selectedSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
            <div className="clear_btn" onClick={handleClear}>Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}
