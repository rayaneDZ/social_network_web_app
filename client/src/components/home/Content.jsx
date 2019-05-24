import React, { Component } from 'react';
import Post from '../post/Post.jsx';
import MakePost from '../MakePost.jsx'
import Loading from '../Loading.jsx';
import axios from 'axios';
import moment from 'moment';

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto'
    }
}


class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading  : true,
      postsArray : []
    }
    this.postsArray = [];
  }
  componentDidMount(){
    axios.get('http://localhost:5000/post',).then(result => {
      this.setState({
        loading : false
      });
      return result.data.posts;
    }).then(posts => {
      //for each post that we got
      posts.forEach(post => {
        //populate the components in
        this.postsArray.unshift(<Post
          deletePost = {this.deletePost}
          key = {post._id}
          postID = {post._id}
          user = {post.user}
          PPP = {post.profile_picture_path}
          date = {moment(post.date).format('DD-MM-YYYY')}
          content = {post.content}
          reacts = {post.reacts}
        />);
      });
      //set the state to the populated in components aray
      this.setState({
        postsArray : this.postsArray
      })
    })
  }
  deletePost = (postId) => {
    this.postsArray.forEach(post => {
      if(post.key === postId){
        this.postsArray.splice(this.postsArray.indexOf(post), 1)
      }
    })
    this.setState({
      postsArray : this.postsArray
    })
  }
  addPost = (post) => {
    //populate a new post with the post we got from MakePost component
    this.postsArray.unshift(<Post
      deletePost = {this.deletePost}
      key = {post._id}
      postID = {post._id}
      user = {post.user}
      PPP = {post.profile_picture_path}
      date = {moment(post.date).format('DD-MM-YYYY')}
      content = {post.content}
      reacts = {post.reacts}
    />);
    this.setState({
      postsArray : this.postsArray
    })
  }
  render() {
    return (
      <div className="container" style = {style.container} id="postsContainer">
        <MakePost addPost = {this.addPost}/>
        {
        this.state.loading ?
          <Loading/>
        : 
          <div>{this.state.postsArray}</div>
        }
      </div>
    )
  }
}

export default Content
