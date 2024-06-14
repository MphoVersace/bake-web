import React from 'react';
import cake1 from './assets/cake1.jpeg';
import cake2 from './assets/cake2.jpeg';
import burger3 from './assets/image3.jpeg';
import burger4 from './assets/image4.jpeg';
import burger5 from './assets/image5.jpeg';
import burger6 from './assets/image6.jpeg';
import burger7 from './assets/image7.jpeg';
import burger8 from './assets/image8.jpeg';
import burger9 from './assets/image9.jpeg';
import burger10 from './assets/image10.jpeg';
import './styles.css';

const MenuPage = () => {
  const burgers = [
    { name: 'Classic Vanilla Cupcakes', img: cake1, description: 'A light and fluffy vanilla-flavored cupcake topped with a smooth, creamy vanilla buttercream frosting. Perfect for those who love a simple yet delicious treat..' },
    { name: 'Cheese Burger', img: burger2, description: 'A cheesy explosion with three types of melted cheese.' },
    { name: 'Bacon Burger', img: burger3, description: 'Crispy bacon and special sauce make this a standout.' },
    { name: 'Veggie Burger', img: burger4, description: 'A vegetarian delight with fresh veggies and a unique patty.' },
    { name: 'Spicy Burger', img: burger5, description: 'A spicy kick with jalapenos and hot sauce for the brave.' },
    { name: 'Mushroom Burger', img: burger6, description: 'A mushroom-flavored burger.' },
    { name: 'BBQ Burger', img: burger7, description: 'A sweet and sour BBQ burger.' },
    { name: 'Peri Peri Original', img: burger8, description: 'The iconic Black Mamba Peri-Peri sauce on our Original Chicken Sandwich.' },
    { name: 'Texas BBQ King', img: burger9, description: 'The Texas BBQ KING features two flame-grilled beef patties, our signature crispy onion rings, tangy BBQ sauce, melted.' }, // Added comma
    { name: ' Chicken Cheese', img: burger10, description:'Classic ingredients flavoured just right. You can’t go wrong with our Cheeseburger, a signature flame-grilled beef patty.' } // Added comma
  ];

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Our Menu</h1>
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
