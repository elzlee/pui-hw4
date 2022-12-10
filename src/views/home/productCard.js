import React, { Component } from 'react';

import '../../productCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL : this.props.imageURL,
      productName : this.props.productName,
      basePrice : this.props.basePrice,
      updatedPrice : this.props.basePrice, /* in the beginning, same as base */
      rollGlazing : "Keep Original",
      glazingPriceAdaption : 0,
      rollPackSize : 1
    }
  }
  
  glazing_priceChangeHandler = (event) => {
    console.log("called glazing price handler")
    console.log("event.target.value:" + event.target.value)
    /* this.setState({rollGlazing : event.target.value}); */
    this.state.rollGlazing = event.target.value;

    if (event.target.value === "Keep Original"){
      this.state.glazingPriceAdaption =0 ;
    } else if (event.target.value === "Sugar Milk"){
      this.state.glazingPriceAdaption =0 ;
    } else if (event.target.value === "Vanilla Milk"){
      this.state.glazingPriceAdaption =0.50 ;
    } else if (event.target.value === "Double Chocolate"){
      this.state.glazingPriceAdaption =1.50 ;
    }
    
    console.log("this.state.basePrice:" + this.state.basePrice)
    console.log("this.state.glazingPriceAdaption:" + this.state.glazingPriceAdaption)
    console.log("this.state.rollPackSize:" + this.state.rollPackSize)
    
    this.setState({updatedPrice : Math.round(
                                            ( (+this.state.basePrice + this.state.glazingPriceAdaption) * this.state.rollPackSize
                                             + Number.EPSILON) * 100
                                            ) / 100
                  }); 
  }


  packsize_priceChangeHandler = (event) => {
    this.setState({rollPackSize: event.target.value})  /* ex) 1, 3, 6, 12 */
    this.state.rollPackSize = event.target.value
    this.setState({updatedPrice : Math.round(
                                            ( (+this.state.basePrice + this.state.glazingPriceAdaption) * this.state.rollPackSize
                                            + Number.EPSILON) * 100
                                            ) / 100
                  }); 
  }

  addToCartListHandler = (event) => {
    /* Call this function when Add To Cart button is pressed */
    // create the dict object to append to CartList
    let cartObject = {
      productName: this.state.productName,
      packsize: this.state.rollPackSize,
      glazing: this.state.rollGlazing,
      updatedprice : this.state.updatedPrice
    }
    // Call callback_AddToCartList (passed in as a prop)
  }

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
                <select className="glazing-selector" onChange={this.glazing_priceChangeHandler}  >
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
              <div className="pack-size-buttons"  onChange={this.packsize_priceChangeHandler} >
                  <input type="radio" id="packSize1" value="1" name="selection" />
                  <label htmlFor="packSize1">1</label>

                  <input type="radio" id="packSize3" value="3" name="selection" />
                  <label htmlFor="packSize3">3</label>
            
                  <input type="radio" id="packSize6" value="6" name="selection" />
                  <label htmlFor="packSize6">6</label>

                  <input type="radio" id="packSize12" value="12" name="selection" />
                  <label htmlFor="packSize12">12</label>
              </div>
            </div>
            
            <div className="productDescriptionRow" id="price-row1">
              <div className="productDescriptionCol">
                <h3 id="originalRollPrice">${this.state.updatedPrice}</h3>
              </div>
              <div className="productDescriptionCol">
                <div className="add-to-cart-button" onClick={this.addToCartListHandler}>
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