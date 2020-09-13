import React, { Component } from "react";

class ProductHeader extends Component {
  state = {
    order: 0,
  };
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
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
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductHeader;
