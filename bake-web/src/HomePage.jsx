import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import home1 from './assets/home1.jpeg';
import home2 from './assets/home2.jpeg';
import home3 from './assets/home3.jpeg';
import home4 from './assets/home4.jpeg';
import home5 from './assets/home5.jpeg';
import home6 from './assets/home6.jpeg';
import home7 from './assets/home7.jpeg';
import home8 from './assets/home8.jpeg';
import fav1 from './assets/fav1.jpeg';
import fav2 from './assets/fav2.jpeg';
import fav3 from './assets/fav3.jpeg';
import fav4 from './assets/fav4.jpeg';
import fav5 from './assets/fav5.jpeg';
import fav6 from './assets/fav6.jpeg';
import fav7 from './assets/fav7.jpeg';
import fav8 from './assets/fav8.jpeg';
import img1 from './assets/qaulity-at-the-heart.png';
import img2 from './assets/passion-for-flour.png';
import img3 from './assets/american-tradition.webp';
import img4 from './assets/family-owned-company.png';
import './styles.css';

const HomePage = () => {
  const images = [
    { src: home1 },
    { src: home2 },
    { src: home3 },
    { src: home4 },
    { src: home5 },
    { src: home6 },
    { src: home7 },
    { src: home8 },
  ];

  const additionalImages = [
    { src: img1, alt: 'Additional Image 1', text: 'Quality at Heart - Delivering the highest standard in all we do ' },
    { src: img2, alt: 'Additional Image 2', text: 'Passion for flour - Freshly made everyday' },
    { src: img3, alt: 'Additional Image 3', text: 'American Tradition - Taste of America at your local bakery' },
    { src: img4, alt: 'Additional Image 4', text: 'Family-Owned Company - Proud American heritage dating back to 1828' },
  ];

  const favImages = [
    { src: fav1 },
    { src: fav2 },
    { src: fav3 },
    { src: fav4 },
    { src: fav5 },
    { src: fav6 },
    { src: fav7 },
    { src: fav8 },
  ];

  return (
    <div className="home-page">
      <h1 className="carousel-title">Welcome To The Home Of Cupcakes!</h1>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={500}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.src} alt={`Slide ${index + 1}`} className="carousel-image" />
            <div className="carousel-caption">
              <p className="carousel-caption-text">
                <strong>The Home Of Cupcakes</strong>
                <br />
                HOME OF CUPCAKES is a family-owned artisanal patisserie and coffee shop with a proud American heritage dating back to 1889. Known for our personal touch, impeccable service levels and warm, sophisticated atmosphere,  <em>HOME OF CUPCAKES</em> offers a vast American style menu to suit any occasion, from diet cupcakes right through to sweet and every coffee and teatime in between.
                <br />
                We are all about people, community and great food, delivered to you with unapologetic American flair. Our gourmet meals and freshly baked cupcakes, pastries and confectionary, are made daily from scratch with carefully selected quality ingredients. Our customers pop in for a bite, business meeting or catch up with friends with many loyalists visiting us on a regularly basis.
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <hr className="divider-line" />

      <h1>Our Commitment</h1>
      
      <hr className="divider-line" />

      <p>For five generations, <em>Home Of Cupcakes</em> has played a crucial role in the community, recognising the importance of protecting the environment and bringing quality products to people all over the world.</p>

      <hr className="divider-line" />

      <div className="additional-images-container">
        {additionalImages.map((image, index) => (
          <div key={index} className="additional-image-item">
            <img src={image.src} alt={image.alt} className="additional-image" />
            <p className="additional-image-text">{image.text}</p>
          </div>
        ))}
      </div>

      <h1 className="additional-text-title">Quality at Heart</h1>
      <p className="additional-text-paragraph">Delivering the highest standard in all we do</p>

      <hr className="divider-line" />

      <h1>Your Favs!</h1>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={500}
        showThumbs={false}
        showStatus={false}
      >
        {favImages.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.src} alt={`Fav Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>

      <footer className="footer">
        <div className="footer-content">
          <p><strong>PAUL Melrose Arch</strong><br />
          Melrose Arch Shopping Centre, Melrose North<br />
          (087) 351 6091<br />
          Sunday to Thursday: 7am – 9pm<br />
          Friday & Saturday: 7am – 10pm</p>

          <p><strong>THE HOME OF CUPCAKES Bryanston</strong><br />
          Winifred Mandela Precinct, Bryanston<br />
          (087) 351 6092<br />
          Monday to Sunday: 7am – 6pm</p>

          <p><strong>PAUL Morningside</strong><br />
          Morningside Shopping Centre, Morningside<br />
          (087) 351 6093<br />
          Sunday to Monday: 7am – 6pm<br />
          Tuesday & Wednesday: 7am – 9pm<br />
          Thursday to Saturday: 7am – 10pm</p>

          <p><strong>PAUL Polofields</strong><br />
          Polofields Crossing, Waterfall<br />
          (087) 551 0044<br />
          Sunday to Monday: 7am – 6pm<br />
          Tuesday & Wednesday: 7am – 9pm<br />
          Thursday to Saturday: 7am – 10pm</p>

          <p><strong>PAUL Neighbourhood</strong><br />
          The Neighbourhood Square, Linksfield<br />
          (087) 351 6097<br />
          Monday: 7am – 6pm<br />
          Tuesday & Wednesday: 7am – 9pm<br />
          Thursday to Saturday: 7am – 10pm<br />
          Sunday: 7am – 9pm</p>

          <p><strong>PAUL V&A Waterfront</strong><br />
          Shop No 128, Lower Level, Victoria Wharf Shopping Centre<br />
          (087) 470 0316<br />
          Sunday to Friday: 7.30am – 10pm<br />
          Saturday: 7.30am – 11pm</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
