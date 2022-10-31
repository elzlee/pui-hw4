import React, { Component } from 'react';
import '../../productCard.css';

class ProductCard extends Component {
  render() {
    return (
      <div className="productCard" >
          <div className="theImage">
            <img className="product-image" src={this.props.imageURL} alt={this.props.productName}/>
          </div>
          <div className="belowImage">
            <div className="productDescriptionRow">
              <h3>{this.props.productName}</h3>
            </div>
            <div className="productDescriptionRow"> 
              <div className="productDescriptionCol">
                <div className="card-text"><p>Glazing:</p></div>
              </div>
              <div className="productDescriptionCol">
                <select className="glazing-selector" >
                  <option value="Keep Original">Keep Original</option>
                  <option value="Sugar Milk">Sugar Milk</option>
                  <option value="Vanilla Milk">Vanilla Milk</option>
                  <option value="Double Chocolate">Double Chocolate</option>
                </select>
              </div>
            </div>


            <div className="productDescriptionRow" id="pack-size-row1">
              <div className="productDescriptionCol">
                <div className="card-text">
                  <p>Pack Size:</p>
                </div>
              </div>
              <div className="pack-size-buttons">
                  <input type="radio" id="packSize1" value="1" name="selection" />
                  <label for="packSize1">1</label>

                  <input type="radio" id="packSize3" value="3" name="selection" />
                  <label for="packSize3">3</label>
            
                  <input type="radio" id="packSize6" value="6" name="selection" />
                  <label for="packSize6">6</label>

                  <input type="radio" id="packSize12" value="12" name="selection" />
                  <label for="packSize12">12</label>
              </div>
            </div>
            
            <div className="productDescriptionRow" id="price-row1">
              <div className="productDescriptionCol">
                <h3 id="originalRollPrice">${this.props.productPrice}</h3>
              </div>
              <div className="productDescriptionCol">
                <div className="add-to-cart-button">
                  <div className="addtocart-text"><h3>Add To Cart</h3></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    );
  }
}

export default ProductCard