import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "../src/assets/Home/Home";
import * as serviceWorker from "./serviceWorker";
// import {createStore} from 'redux'
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalReducer'
// const createStore= redux.createStore;

// Store
// const storeRedux= createStore(rootReducer);
// Dispatching
// store.dispatch({type:" "})
// Subscribe

// Provider hanya pembungkus wrapper seperti fragment
// ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById("home"));
ReactDOM.render(<Home />, document.getElementById("home")); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
