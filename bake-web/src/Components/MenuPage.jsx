import React from 'react';

const MenuPage = () => {
  return (
    <div>
      <h1>Our Burgers</h1>
      <div className="burger-list">
        <div className="burger-item">
          <img src="path-to-burger1.jpg" alt="Classic Burger" />
          <h2>Classic Burger</h2>
          <p>A timeless favorite with fresh lettuce, tomato, and cheese.</p>
        </div>
        <div className="burger-item">
          <img src="path-to-burger2.jpg" alt="Cheese Delight" />
          <h2>Cheese Delight</h2>
          <p>A cheesy explosion with three types of melted cheese.</p>
        </div>
        <div className="burger-item">
          <img src="path-to-burger3.jpg" alt="Bacon Bliss" />
          <h2>Bacon Bliss</h2>
          <p>Crispy bacon and special sauce make this a standout.</p>
        </div>
        <div className="burger-item">
          <img src="path-to-burger4.jpg" alt="Veggie Garden" />
          <h2>Veggie Garden</h2>
          <p>A vegetarian delight with fresh veggies and a unique patty.</p>
        </div>
        <div className="burger-item">
          <img src="path-to-burger5.jpg" alt="Spicy Fiesta" />
          <h2>Spicy Fiesta</h2>
          <p>A spicy kick with jalapenos and hot sauce for the brave.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
