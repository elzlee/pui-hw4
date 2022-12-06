// Create a React component for the homepage here in index.js

import React, { Component } from 'react';
import { useState } from 'react';
import '../../index.css';
import ProductCard from './productCard';
import NavBar from './navBar';


/*
Cart data: dictionary {id #: (productName, glazing, packSize, price)}
3sec popup: make popup div with info from the dict row
Loop through each item in dict to get price for Total Cart Sum.
*/

function HomePage () {
  // Define the initial state
  const [cartData, setCartData] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // Define a callback function that updates the state
  const callback_AddToCartList = () => {
    setState((state) => ({
      ...state,
      count: state.count + 1,
    }));
  };

  return (
    <div className="homepage-container">
      <header>
        <div className="header-left">
          <img id="logo-img" src= {process.env.PUBLIC_URL+"/assets/logo-01.svg"} alt="bunbun bake shop logo"/>
        </div>

        <div className="header-right">
          <NavBar />
        </div>

      </header>

      <div id="productCardList">
        <div className="listing-row">
          <ProductCard 
            imageURL={process.env.PUBLIC_URL+"/assets/original-cinnamon-roll.jpg" }
            productName="Original Cinnamon Roll" 
            basePrice="2.49" />
          <ProductCard 
            imageURL={process.env.PUBLIC_URL+"/assets/apple-cinnamon-roll.jpg" }
            productName="Apple Cinnamon Roll" 
            basePrice="3.49" />
          <ProductCard 
            imageURL={process.env.PUBLIC_URL+"/assets/raisin-cinnamon-roll.jpg" }
            productName="Raisin Cinnamon Roll" 
            basePrice="2.99" />
        </div>
        <div className="listing-row">
          <ProductCard 
            imageURL={process.env.PUBLIC_URL+"/assets/walnut-cinnamon-roll.jpg" }
            productName="Walnut Cinnamon Roll" 
            basePrice="3.49" />
          <ProductCard 
            imageURL={process.env.PUBLIC_URL+"/assets/double-chocolate-cinnamon-roll.jpg" }
            productName="Double Chocolate  Roll" 
            basePrice="3.99" />
          <ProductCard 
            imageURL={process.env.PUBLIC_URL+"/assets/strawberry-cinnamon-roll.jpg"} 
            productName="Strawberry Cinnamon Roll" 
            basePrice="2.49" />
        </div>
        
      </div>
    </div>
  );


}


export default HomePage