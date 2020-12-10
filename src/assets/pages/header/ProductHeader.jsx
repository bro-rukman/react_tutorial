import React, { Component } from "react";
import Counter from "./Counter";

class ProductHeader extends Component {
  
  render() {
    return (
      <div className="card-product">
        <div className="img-thumb-product">
          <img
            src="https://image.cermati.com/q_70/mhgbfukspbxmn0nlzb3l"
            width="200px"
            height="200px"
            alt="image-product"
          />
          <p className="product-title">Daging ayam</p>
          <p className="product-price">Rp 30.000</p>
          <Counter/>
          <p className="total-harga"></p>
        </div>
      </div>
    );
  }
}
export default ProductHeader;
