import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/aboutme">About me</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
