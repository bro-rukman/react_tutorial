import Axios from 'axios';
import React, {Component, Fragment} from 'react';
import "./DetailPost.css";

class DetailPost extends Component{
    state={
        post:{
            title:'',
            body:'',
        }
    }
    componentDidMount(){
        let id=this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res=>{
            console.log("result :", (res));
            let post=res.data;
            this.setState({
                post:{
                    title: post.title,
                    body : post.body,
                }
            });
        })
    }
render(){
    console.log('detailpost',this.props);
    return(
        <Fragment>
            <div className="detailPost">
            <h1>New detail project</h1>
            <p className="detail-title"> Title : {this.state.post.title}</p>
            <p className="detail-body">Body : {this.state.post.body}</p>
            </div>
        </Fragment>
    )
}
}
export default DetailPost;
