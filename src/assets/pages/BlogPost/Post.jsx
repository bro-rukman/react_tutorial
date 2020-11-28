import React from "react";
import { Link } from "react-router-dom";
const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="image" />
      </div>
      <div className="content">
        <p className="title" onClick={()=>props.goDetail(props.data.id)}>{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <div className="rowbtn">
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
        <button className="update" onClick={() => props.update(props.data)}>
          Update
        </button></div>
      </div>
    </div>
  );
};

export default Post;
