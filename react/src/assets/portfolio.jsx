// Portfolio.jsx

import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>

      <section className="project-box">
        <h3>Project 1</h3>
        <p>
          This is a description of my first project. It includes details about the technologies used, challenges faced, and the outcome.
        </p>
      </section>

      <section className="project-box">
        <h3>Project 2</h3>
        <p>
          Describe your second project here, providing information about the technologies, features, and any interesting aspects of the project.
        </p>
      </section>

      <section className="project-box">
        <h3>Project 3</h3>
        <p>
          Share details about your third project, including the technologies, your role, and the impact of the project.
        </p>
      </section>

      {/* Add more sections for additional projects as needed */}
    </div>
  );
};

export default Portfolio;
