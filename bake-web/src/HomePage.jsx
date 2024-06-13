import React from 'react';
import burger1 from './assets/image1.jpeg';
import burger2 from './assets/image2.jpeg';
import burger3 from './assets/image3.jpeg';
import burger4 from './assets/image4.jpeg';
import burger5 from './assets/image5.jpeg';
import burger6 from './assets/image6.jpeg';
import burger7 from './assets/image7.jpeg';
import burger8 from './assets/image8.jpeg';
import './styles.css';

const MenuPage = () => {
  const burgers = [
    { name: 'Classic Burger', img: burger1, description: 'A timeless favorite with fresh lettuce, tomato, and cheese.' },
    { name: 'Cheese Burger', img: burger2, description: 'A cheesy explosion with three types of melted cheese.' },
    { name: 'Bacon Burger', img: burger3, description: 'Crispy bacon and special sauce make this a standout.' },
    { name: 'Veggie Burger', img: burger4, description: 'A vegetarian delight with fresh veggies and a unique patty.' },
    { name: 'Spicy Burger', img: burger5, description: 'A spicy kick with jalapenos and hot sauce for the brave.' },
    { name: 'Mushroom Burger', img: burger6, description: 'A mushroom-flavored burger.' },
    { name: 'BBQ Burger', img: burger7, description: 'A sweet and sour BBQ burger.' },
    { name: 'Peri Peri Original', img: burger8, description: 'The iconic Black Mamba Peri-Perauce on our Original Chicken Sandwich.' },
  ];
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1 className="menu-title">Our Menu</h1>
      </header>
      <div className="burger-list">
        {burgers.map((burger, index) => (
          <div className="burger-item" key={index}>
            <img src={burger.img} alt={burger.name} />
            <h2>{burger.name}</h2>
            <p>{burger.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
