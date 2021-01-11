import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
import ProductHeader from "./ProductHeader";
import { GlobalConsumer } from "../../../context/context";
// import {connect} from 'react-redux'
// import {RootContext} from '../../Home/Home'

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
    console.log('this',this);
    return (
            <Fragment>
              <div className="header">
                <div className="logo">
                    <div className="count">Jumlah : {this.props.state.totalOrder}</div>
                </div>
              </div>
              <ProductHeader/>
            </Fragment>
      // <RootContext.Consumer>
      //   {
      //     value=>{
      //       console.log('valueProduct',value);
      //       return(
      //       )
      //     }
      //   }
      // </RootContext.Consumer>
    );
  }
}
// const mapStateToProps=(state)=>{
//   return{
//     order:state.totalOrder
//   }
// }
// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);
