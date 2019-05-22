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
      posts.forEach(post => {
        this.postsArray.unshift(<Post
          key = {post._id}
          postID = {post._id}
          user = {post.user}
          PPP = {post.profile_picture_path}
          date = {moment(post.date).format('DD-MM-YYYY')}
          content = {post.content}
          reacts = {post.reacts}
        />);
      });
      this.setState({
        postsArray : this.postsArray
      })
    })
  }
  makePostCallback = (post) => {
    this.postsArray.unshift(<Post
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
        <MakePost makePostCallback = {this.makePostCallback}/>

        {this.state.loading ? <Loading/> : <div>{this.state.postsArray}</div>}

      </div>
    )
  }
}

export default Content
