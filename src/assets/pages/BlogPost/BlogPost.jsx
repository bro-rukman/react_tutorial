import React, { Component, Fragment } from "react";
import Post from "./Post";
import "./BlogPost.css";
import axios from "axios";
import API from "../../../services";

class BlogPost extends Component {
  state = {
    hits: [],
    formBlogPost:{
      userId:1,
      id:1,
      title:'',
      body:'',
    },
    isUpdate:false,
    photos : []
  };
  getPostAPI = () => {
    API.getNewsBlog().then(result=>{
        this.setState({
          hits: result,
        });
    })
    API.getPhotos().then(result=>{
      this.setState({
        photos:result,
      })
    })
    // axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`).then((result) => {
    // });
  };
  postDataToAPI=()=>{
    axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then((res) => {
      console.log('result',res);
      this.getPostAPI();
      this.setState({
        formBlogPost:{
          userId:1,
          id:1,
          title:'',
          body:'',
        }
      })
    },(err)=>{
      console.log("error",err);
    })
  }
  putDataToAPI=()=>{
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res)=>{
    console.log(res);
    this.getPostAPI();
    this.setState({
      isUpdate:false,
      formBlogPost:{
        userId:1,
        id:1,
        title:'',
        body:'',
      }
    })
    })
  }
  handleRemove = (data) => {
    console.log(data); 
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };
  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost:data,
      isUpdate:true
    })
    
  }
  handleFormChange=(event)=>{
    let formBlogPostNew = {...this.state.formBlogPost};
    console.log(event.target.name);
    formBlogPostNew[event.target.name]=event.target.value;
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew['id']=timestamp;
    }
    console.log(timestamp);
    this.setState({
      formBlogPost:formBlogPostNew,
    })
  }
  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    }else{
      this.postDataToAPI();
    }
  }
  handleDetail =(id)=>{
    this.props.history.push(`/detail/${id}`);
  }
  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
          <label htmlFor="body">Blog content</label>
          <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add-blog-content" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
        </div>
        {
          this.state.photos.map(photos=>{
            return <p>{photos.title}-{photos.url}</p>
          })
        }
        {this.state.hits.map((hits) => {
          return <Post key={hits.id} data={hits} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />;
        })}
      </Fragment>
    );
  }
}
export default BlogPost;
