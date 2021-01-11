// Libraries
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";
// Styling
import "../Home/Home.css";
// Pages
import YoutubeComp from "../pages/YoutubeComp/YoutubeComp";
import Product from "../pages/header/Product";
import BlogPost from "../pages/BlogPost/BlogPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import ComponentFull from "../pages/component/Component";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import { act } from "react-dom/test-utils";
import GlobalProvider from '../../context/context';

// export const RootContext=createContext();
// const Provider=RootContext.Provider;


class Home extends Component {

  render() {
    return (
      <BrowserRouter>
      {/* <Provider value={
        {
          state: this.state,
          dispatch : this.dispatch,
        }
      }> */}
      <Fragment>
      <div>
        <h2>React Router Dom</h2>
       <ul className="space"> <li><Link to="/">Homepage</Link></li>
            <li><Link to="/youtube">Youtube</Link></li>
            <li><Link to="/card">Card</Link></li>
            <li><Link to="/lifecycle">Lifecycle</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/detail/:id">DetailPost</Link></li>
        </ul>
        <br/><br/><hr/>
       </div>
          <Route path="/" exact component={BlogPost}/>
          <Route path="/card" component={ComponentFull}/>
          <Route path="/lifecycle" component={LifeCycleComp}/>
          <Route path="/youtube" component={YoutubeComp}/>
          <Route path="/product" component={Product}/>
          <Route path="/detail/:postID" component={DetailPost}/>
        </Fragment>
        {/* </Provider> */}
      </BrowserRouter>
    );
  }
}

export default GlobalProvider(Home);
