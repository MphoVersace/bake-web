import React from 'react';
import cupcakeHistoryImage from './assets/story1.jpeg'; // Replace with the actual image path
import './styles.css'; // Import your styles

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
      </div>

      <div className="about-section">
        <img src={cupcakeHistoryImage} alt="Cupcake History" className="cupcake-history-image" />
      </div>
    </div>
  );
};

export default AboutPage;
