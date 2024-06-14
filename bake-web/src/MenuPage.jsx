import React from 'react';
import cake1 from './assets/cake1.jpeg';
import cake2 from './assets/cake2.jpeg';
import cake3 from './assets/cake3.jpeg';
import cake4 from './assets/cake4.jpeg';
import cake5 from './assets/cake5.jpeg';
import cake6 from './assets/cake6.jpeg';
import cake7 from './assets/cake7.jpeg';
import burger8 from './assets/image8.jpeg';
import burger9 from './assets/image9.jpeg';
import burger10 from './assets/image10.jpeg';
import './styles.css';

const MenuPage = () => {
  const burgers = [
    { name: 'Classic Vanilla Cupcakes', img: cake1, description: 'A light and fluffy vanilla-flavored cupcake topped with a smooth, creamy vanilla buttercream frosting. Perfect for those who love a simple yet delicious treat..' },
    { name: 'Chocolate Lovers Cupcake', img: cake2, description: 'Rich, moist chocolate cupcake made with high-quality cocoa, topped with a decadent chocolate ganache and chocolate shavings. A must-try for any chocolate enthusiast.' },
    { name: 'Red Velvet Cupcakes', img: cake3, description: 'A velvety smooth, deep red cupcake with a hint of cocoa, paired with a tangy cream cheese frosting. This classic Southern favorite is both elegant and indulgent.' },
    { name: 'Lemon Zest Cupcakes', img: cake4, description: 'A refreshing cupcake with a bright, zesty lemon flavor, topped with a tangy lemon buttercream frosting and a candied lemon peel garnish. Perfect for a burst of citrusy goodness..' },
    { name: 'Salted Caramel Cupcakes', img: cake5, description: 'A moist vanilla cupcake filled with a gooey salted caramel center, topped with a swirl of caramel buttercream and a sprinkle of sea salt. The perfect blend of sweet and salty..' },
    { name: 'Strawberry Shortcake Cupcakes', img: cake6, description: 'Light and airy vanilla cupcake infused with fresh strawberries, topped with a fluffy whipped cream frosting and a juicy strawberry slice. A delightful twist on a classic dessert..' },
    { name: 'Peanut Butter Cupcakes', img: cake7, description: 'A rich peanut butter-flavored cupcake topped with creamy peanut butter frosting and a drizzle of chocolate ganache. Perfect for peanut butter lovers.' },
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
