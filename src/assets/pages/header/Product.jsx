import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductHeader from "./ProductHeader";
// import {connect} from 'react-redux'

class Product extends Component {
  // state = {
  //   order: 0,
  //   harga : 30000,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //     harga: '',
  //   });
  // };
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
              <div className="count">Jumlah : {this.props.order}</div>
          </div>
        </div>
        <ProductHeader/>
      </Fragment>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    order:state.totalOrder
  }
}
export default connect(mapStateToProps)(Product);
