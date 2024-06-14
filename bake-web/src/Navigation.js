// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
          <li className="navbar-item"><Link to="/menu" className="navbar-link">Menu</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
