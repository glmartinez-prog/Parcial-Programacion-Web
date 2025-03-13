import React from 'react';
import '../assets/styles.css';
import menuIcon from '../assets/menu.jpg';
import storesIcon from '../assets/stores.jpg';
import cartIcon from '../assets/cart.jpg';
import backgroundImage from '../assets/mesa.jpg';

function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="icon-box">
        <div className="icon-item">
          <img src={menuIcon} alt="Menu" />
          <p>MENU</p>
        </div>
        <div className="icon-item">
          <img src={storesIcon} alt="Stores" />
          <p>STORES</p>
        </div>
        <div className="icon-item">
          <img src={cartIcon} alt="Cart" />
          <p>CART</p>
        </div>
      </div>
    </div>
  );
}

export default Home;


