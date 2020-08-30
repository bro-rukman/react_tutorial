import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navigasi from "../src/assets/component/Component";
import * as serviceWorker from "./serviceWorker";

const HelloWorld = () => {
  return <p>Hello world</p>;
};
class StatefullComponent extends React.Component {
  render() {
    return <h1>hello react</h1>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
ReactDOM.render(<StatefullComponent />, document.getElementById("state"));
ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Navigasi />, document.getElementById("nav"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
