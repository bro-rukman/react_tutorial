import React, { Component } from "react";
import "../Home/Home.css";
import YoutubeComp from "../component/YoutubeComp/YoutubeComp";
import Product from "../header/Product";
import BlogPost from "../component/BlogPost/BlogPost";
import LifeCycleComp from "../component/LifeCycleComp/LifeCycleComp";
import Post from "../component/Post/Post";

class Home extends Component {
  state = {
    showComp: true,
  };
  componentDidMount() {}
  render() {
    return (
      <div className="row">
        {/* <YoutubeComp title="gambar1" waktu="4.14" />
        <YoutubeComp waktu="12" />
        <YoutubeComp waktu="12" />
        <p>Counter</p>
        <Product />
        <LifeCycleComp />
        <hr className="hr"></hr> */}
        <BlogPost />
      </div>
    );
  }
}

export default Home;
