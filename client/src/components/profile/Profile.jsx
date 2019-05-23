import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import Post from '../post/Post.jsx';
import axios from 'axios';
import moment from 'moment';
import Loading from '../Loading.jsx';

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto'
    },
    profileContainer : {
      height : '100%',
      backgroundColor : '#e9ebee'
    },
    noPosts : {
      margin : '50px auto',
      width : 300,
      textAlign : 'center'
    }
}


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : true,
      noPosts : false,
      postsArray : []
    };
    this.postsArray = [];
    this.parsedPosts = [];
  }
  componentDidMount(){
    axios.get(`http://localhost:5000/post/${this.props.match.params.username}`)
    .then(result => {
      console.log(result.data)
      if(result.data.length <= 0){
        this.setState({
          noPosts : true
        })
      }
      this.setState({
        loading : false
      });
      return result.data.posts;
    }).then(posts => {
      posts.forEach(post => {
        //in order to delete posts immediatly after clicking delete
        this.parsedPosts.unshift(post);

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
      this.setState({
        postsArray : this.postsArray
      })
    })
  }
  deletePost = (postId) => {
    this.parsedPosts.forEach(parsedPost => {
      if(parsedPost._id === postId){
        this.parsedPosts.splice(this.parsedPosts.indexOf(parsedPost), 1)
      }
    })
    this.postsArray = [];
    this.parsedPosts.forEach(post => {
      this.postsArray.push(<Post
        deletePost = {this.deletePost}
        key = {post._id}
        postID = {post._id}
        user = {post.user}
        PPP = {post.profile_picture_path}
        date = {moment(post.date).format('DD-MM-YYYY')}
        content = {post.content}
        reacts = {post.reacts}
      />);
    })
    this.setState({
      postsArray : this.postsArray
    })
  }
  render() {
    return (
      <div style= {style.profileContainer}>
          <NavBar />
          <div className="container" style = {style.container}>
            <ProfileHeader/>
          </div>
          <div className=" container " style = {style.container}>
            {this.state.loading ? 
              <Loading /> 
            : this.state.noPosts ?
                <div style={style.noPosts}><h5>No Posts Yet</h5></div>
              :
              <div>{this.postsArray}</div>}
          </div>
      </div>
    )
  }
}

export default Profile
