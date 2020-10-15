import React, { Component, Fragment } from "react";
import Post from "../Post/Post";
import "./BlogPost.css";
import axios from "axios";
// const API = "https://jsonplaceholder.typicode.com/posts";
// const DEFAULT_QUERY = "redux";
// json-server --watch db.json --port 3004

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
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
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
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add title"/>
          <label htmlFor="body-content">Blog content</label>
          <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder="add-blog-content"></textarea>
          <button className="btn-submit">Simpan</button>
        </div>
        {this.state.hits.map((hits) => {
          return <Post key={hits.id} data={hits} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}
export default BlogPost;
