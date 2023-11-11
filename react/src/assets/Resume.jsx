import React from 'react';
import './Resume.css'; // Import your CSS file for styling

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>

      <section>
        <h3>Education</h3>
        <p>
          University Name, Degree in Computer Science, Graduation Year
        </p>
      </section>

      <section>
        <h3>Work Experience</h3>
        <p>
          Company Name, Position, Start Date - End Date
          <br />
          Description of your responsibilities and achievements.
        </p>
        {/* Add more work experience sections as needed */}
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section>
        <h3>Certifications</h3>
        <p>
          Certification Name, Issuing Organization, Year
        </p>
        {/* Add more certification sections as needed */}
      </section>
    </div>
  );
};

export default Resume;
