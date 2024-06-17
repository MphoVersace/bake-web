import React from 'react';
import cupcakeHistoryImage from './assets/story1.jpeg'; // Replace with the actual image path
import './styles.css'; // Import your styles

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>(A Family Story since 1889)</h1>
      </div>

      <div className="about-section">
        <img src={cupcakeHistoryImage} alt="Cupcake History" className="cupcake-history-image" />
        <p className="about-paragraph">
          For many, THE HOME OF CUPCAKES is the embodiment of tradition. And yet, although we are faithful to our historic roots, at THE HOME OF CUPCAKES we have never stopped inventing, innovating and opening new chapters of our story. To browse the history of THE HOME OF CUPCAKES is to leaf through the album of a family that’s proud to offer its customers tasty breads, delicious pâtisseries, pure butter pastries, flavourful cupcakes and so many other gourmet creations added over time by five successive generations.
          <br /><br />
          Who could have imagined, all those years ago, that we would become one of the major players in the coffee market in South Africa now? Or that 18% of the products that we sell today are vegan? Or that we were among the first to sign up to the National Nutritional Health Plan, and to stop using plastic bags? Everyone knows THE HOME OF CUPCAKES. But how well do you really know us?
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
