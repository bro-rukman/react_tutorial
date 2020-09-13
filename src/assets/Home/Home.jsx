import React, { Component } from "react";
import YoutubeComp from "../component/YoutubeComp/YoutubeComp";
import Product from "../header/Product";

class Home extends Component {
  state = {
    showComp: true,
  };
  componentDidMount() {}
  render() {
    return (
      <div className="row">
        <YoutubeComp title="gambar1" waktu="4.14" />
        <YoutubeComp waktu="12" />
        <YoutubeComp waktu="12" />
        <p>Counter</p>
        <Product />
      </div>
    );
  }
}

export default Home;
