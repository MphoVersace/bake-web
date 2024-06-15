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
    { src: img2, alt: 'Additional Image 2', text: 'Passion for flour - Freshly made evertyday' },
    { src: img3, alt: 'Additional Image 3', text: 'American Tradition - Taste of America at your local bakery' },
    { src: img4, alt: 'Additional Image 4', text: 'Family-Owned Company - Proud American heritage dating back to 1828' },
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
      <hr className="divider-line" />
<h1>Your favs!</h1>
<hr className="divider-line" />
    </div>
  );
};

export default HomePage;
