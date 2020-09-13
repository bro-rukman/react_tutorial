import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigasi from "../src/assets/component/Component";
import YoutubeComp from "./assets/component/YoutubeComp/YoutubeComp";
import Home from '../src/assets/Home/Home'
import LifeCycleComp from '../src/assets/component/LifeCycleComp/LifeCycleComp'
import * as serviceWorker from "./serviceWorker";

const HelloWorld = () => {
  return <p > Hello world < /p>;
};
class StatefullComponent extends React.Component {
  render() {
    return <h1 > hello react < /h1>;
  }
}

ReactDOM.render( < HelloWorld / > , document.getElementById("root"));
ReactDOM.render( < StatefullComponent / > , document.getElementById("state"));
ReactDOM.render( < Navigasi / > , document.getElementById("nav"));
ReactDOM.render( < YoutubeComp / > , document.getElementById("youtube"));
ReactDOM.render( < Home / > , document.getElementById("home"));
ReactDOM.render( < LifeCycleComp / > , document.getElementById("lifecycle"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();