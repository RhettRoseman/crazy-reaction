import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
import Portfolio from './portfolio';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/aboutme">About me</a>
        </li>
        <li>
          <a href="/portfolio" onClick={(Portfolio)}>Portfolio</a>
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
