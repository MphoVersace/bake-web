import React from 'react';
import cupcakeHistoryImage from './assets/story1.jpeg';
import libertyStatueImage from './assets/liberty-statue.jpeg'; 
import familyImage from './assets/family-image.jpeg';
import manwomanImage from './assets/man-woman.jpeg';

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
        <div className="about-history"> 
          <img src={libertyStatueImage} alt="Liberty Statue" className="liberty-statue-image" />
          <h1 className="about-history-title"> 1889...</h1>
          <p className="about-history-text">
          In the very same year that the Liberty Statue  <br /> opened to the public in New Jersey, Amelia Simmons <br /> wrote the first lines of this family saga when he opened a bakery <br /> in Jersey City NJ, close to Plainfield.
          </p>
        </div>
        <div className="about-family"> 
        <img src={familyImage} alt="FamilyImage" className="Family-image" />
          <h1 className="about-family-title"> 1908...</h1>
          <p className="about-family-text">
          His son Edmond-Charlemagne, born in 1889, takes over the family business, together with his wife Victorine..
          </p>
        </div>
        </div>
        <div className="about-man"> 
        <img src={manwomanImageImage} alt="manwomanImage" className="manwoman-image" />
          <h1 className="about-manwoman-title"> 1908...</h1>
          <p className="about-text">
          His son Edmond-Charlemagne, born in 1889, takes over the family business, together with his wife Victorine..
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
