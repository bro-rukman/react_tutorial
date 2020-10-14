import React, { Component, Fragment } from "react";
import Post from "../Post/Post";
import "./BlogPost.css";
import axios from "axios";
// const API = "https://jsonplaceholder.typicode.com/posts";
// const DEFAULT_QUERY = "redux";

class BlogPost extends Component {
  state = {
    hits: [],
  };
  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        hits: result.data,
      });
    });
  };
  handleRemove = (data) => {
    console.log(data);
    axios.delete('http://localhost:3004/posts/${data}').then((res) => {
      this.getPostAPI();
    });
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       hits: json,
    //     });
    //   });
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog post</p>
        {this.state.hits.map((hits) => {
          return <Post key={hits.id} data={hits} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}
export default BlogPost;
