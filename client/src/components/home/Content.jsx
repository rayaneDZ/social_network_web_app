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
      loading  : true
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
        this.postsArray.push(<Post
          key = {post._id}
          postID = {post._id}
          user = {post.user}
          PPP = {post.profile_picture_path}
          date = {moment(post.date).format('DD-MM-YYYY')}
          content = {post.content}
          reacts = {post.reacts}
        />);
      });
      this.forceUpdate();
    })
  }
  render() {
    return (
      <div className="container" style = {style.container} id="postsContainer">
        <MakePost/>

        {this.state.loading ? <Loading/> : <div>{this.postsArray}</div>}

      </div>
    )
  }
}

export default Content
