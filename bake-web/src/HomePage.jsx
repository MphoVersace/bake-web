// HomePage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import home1 from './assets/home1.jpeg';
import home2 from './assets/home2.jpeg';
import home3 from './assets/home3.jpeg';
import home4 from './assets/home4.jpeg';
import burger5 from './assets/image5.jpeg';
import burger6 from './assets/image6.jpeg';
import burger7 from './assets/image7.jpeg';
import burger8 from './assets/image8.jpeg';
import './styles.css';

const HomePage = () => {
  const images = [
    { src: home1, alt: 'Classic Burger' },
    { src: home2, alt: 'Cheese Burger' },
    { src: home3, alt: 'Bacon Burger' },
    { src: home4, alt: 'Veggie Burger' },
    { src: burger5, alt: 'Spicy Burger' },
    { src: burger6, alt: 'Mushroom Burger' },
    { src: burger7, alt: 'BBQ Burger' },
    { src: burger8, alt: 'Peri Peri Original' },
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
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
