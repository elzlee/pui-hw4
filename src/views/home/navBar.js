import React, { Component } from 'react';
import '../../navBar.css';

class NavBar extends Component {
  render() {
    return (
      <div NavBar>
        <div className="navbar"> 
          <a className="selected navtab" href="index.html">PRODUCTS</a>
          <a href="index.html" className="navtab" >CART</a>  
          
          <div id="cart-summary">
            <p id="line1">0 items</p>
            <p id="line2">Total: $0.00</p>
          </div>
        </div>

        <div id="line"> <hr/> </div>

        <div id="pagetitle">
          <h1>Our hand-made cinnamon rolls</h1>
        </div>
      </div>
    );
  }
}

export default NavBar


          