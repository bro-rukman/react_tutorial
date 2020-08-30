import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Header from "./assets/header/header"
import * as serviceWorker from "./serviceWorker";

function helloWorld() {
  return <p> hello functional </p>;
}

ReactDOM.render(<helloWorld />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
