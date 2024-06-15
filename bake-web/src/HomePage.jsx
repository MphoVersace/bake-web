// HomePage.js
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
import './styles.css';

const HomePage = () => {
  const images = [
    { src: home1, alt: 'Classic Burger' },
    { src: home2, alt: 'Cheese Burger' },
    { src: home3, alt: 'Bacon Burger' },
    { src: home4, alt: 'Veggie Burger' },
    { src: home5, alt: 'Spicy Burger' },
    { src: home6, alt: 'Mushroom Burger' },
    { src: home7, alt: 'BBQ Burger' },
    { src: home8, alt: 'Peri Peri Original' },
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
