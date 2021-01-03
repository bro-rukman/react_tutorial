import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
import "./LifeCycleComp.css";
import {GlobalConsumer} from "../../../context/context";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedfromProps running");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount running");
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 1000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate running");
    console.log("nextProps :", nextProps);
    console.log("nextState : ", nextState);
    console.groupEnd();
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate running");
    return null;
  }
  componentDidUpdate(preProps, prevState, snapshot) {
    console.log("componentDidUpdate running");
  }
  componentWillMount() {
    console.log("componentWillMount running");
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
              <Fragment>
                <p>LifeCycleComp</p>
                <br />
                <button className="tapping" onClick={this.changeCount}>
                  Lifecycle {this.state.count}
                </button>
                <hr/>
                <p>Total order adalah : {0}</p>
              </Fragment>
    );
  }
}
// const totalOrder=(state)=>{
//   return{
//     ...state,
//   order: state.totalOrder,
//   }
// }

// export default connect(totalOrder)(LifeCycleComp);
export default LifeCycleComp;
