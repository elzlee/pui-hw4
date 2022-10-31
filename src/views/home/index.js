// Create a React component for the homepage here in index.js

import React, { Component } from 'react';
import '../../index.css';
import ProductCard from './productCard';
import NavBar from './navBar';


class HomePage extends Component {
  render() {
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
              productPrice="2.49" />
            <ProductCard 
              imageURL={process.env.PUBLIC_URL+"/assets/apple-cinnamon-roll.jpg" }
              productName="Apple Cinnamon Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL={process.env.PUBLIC_URL+"/assets/raisin-cinnamon-roll.jpg" }
              productName="Raisin Cinnamon Roll" 
              productPrice="2.49" />
          </div>
          <div className="listing-row">
            <ProductCard 
              imageURL={process.env.PUBLIC_URL+"/assets/walnut-cinnamon-roll.jpg" }
              productName="Walnut Cinnamon Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL={process.env.PUBLIC_URL+"/assets/double-chocolate-cinnamon-roll.jpg" }
              productName="Double Chocolate  Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL={process.env.PUBLIC_URL+"/assets/strawberry-cinnamon-roll.jpg"} 
              productName="Strawberry Cinnamon Roll" 
              productPrice="2.49" />
          </div>
          
        </div>
      </div>
  
    );
  }
}

export default HomePage