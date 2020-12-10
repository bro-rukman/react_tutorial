import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "../src/assets/Home/Home";
import * as serviceWorker from "./serviceWorker";
import {createStore} from 'redux'
import {Provider} from 'react-redux';

// const createStore= redux.createStore;
const globalState={
    totalOrder:0,
}

// Reducer
const rootReducer=(state=globalState,action)=>{
    switch (action.type) {
        case 'PLUS_ORDER':
            return{
                ...state,
                totalOrder:state.totalOrder+1,
            }
            break;
        case 'MINUS_ORDER':
            let totalOrder=0;
            if (state.totalOrder>0) {
                totalOrder=state.totalOrder-1;
            }
            return{
                ...state,
                totalOrder: totalOrder,
            }
            break;
        default:
            break;
    }
    return state;
}
// Store
const storeRedux= createStore(rootReducer);
// Dispatching
// store.dispatch({type:" "})
// Subscribe

// Provider hanya pembungkus wrapper seperti fragment
ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById("home"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
