import React from 'react';
import cupcakeHistoryImage from '../assets/story1.jpeg';
import libertyStatueImage from '../assets/liberty-statue.jpeg';
import familyImage from '../assets/family-image.jpeg';
import manwomanImage from '../assets/manwoman.jpeg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>A Family Story since 1889</h1>
      </div>

      <div className="about-section">
        <img src={cupcakeHistoryImage} alt="Cupcake History" className="cupcake-history-image" />
        <p className="about-paragraph">
          For many, THE HOME OF CUPCAKES is the embodiment of tradition. And yet, although we are faithful to our historic roots, at THE HOME OF CUPCAKES we have never stopped inventing, innovating, and opening new chapters of our story. To browse the history of THE HOME OF CUPCAKES is to leaf through the album of a family that’s proud to offer its customers tasty breads, delicious pâtisseries, pure butter pastries, flavorful cupcakes, and so many other gourmet creations added over time by five successive generations.
          <br /><br />
          Who could have imagined, all those years ago, that we would become one of the major players in the coffee market in South Africa now? Or that 18% of the products that we sell today are vegan? Or that we were among the first to sign up to the National Nutritional Health Plan, and to stop using plastic bags? Everyone knows THE HOME OF CUPCAKES. But how well do you really know us?
        </p>
        <div className="about-history">
          <img src={libertyStatueImage} alt="Statue of Liberty" className="liberty-statue-image" />
          <h1 className="about-history-title">1889...</h1>
          <p className="about-history-text">
            In the very same year that the Statue of Liberty opened to the public in New York, Amelia Simmons wrote the first lines of this family saga when she opened a bakery in Jersey City, NJ, close to Plainfield.
          </p>
        </div>
        <div className="about-family">
          <img src={familyImage} alt="Family" className="Family-image" />
          <h1 className="about-family-title">1908...</h1>
          <p className="about-family-text">
            Her son Edmond-Charlemagne, born in 1889, took over the family business, together with his wife Victorine.
          </p>
        </div>
        <div className="aboutmanwoman">
          <img src={manwomanImage} alt="manwoman" className="manwoman-image" />
          <h1 className="about-manwoman-title">1935...</h1>
          <p className="about-manwomantext">
          Their daughter Suzanne marries Julien Holder. They open their own <br /> bakery in rue des Sarrazins in Lille.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
