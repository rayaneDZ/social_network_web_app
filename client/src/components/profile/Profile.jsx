import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import Post from '../post/Post.jsx';
import axios from 'axios';
import moment from 'moment';
import Loading from '../Loading.jsx';
import UserNotFound from '../UserNotFound.jsx'
import Footer from '../Footer.jsx';
import '../css/profile.css';

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
      width : 200,
      textAlign : 'center'
    }
}


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : true,
      noPosts : false,
      postsArray : [],
      user : {},
      userFound : true
    };
    this.postsArray = [];
    this.username = this.props.match.params.username;
  }
  componentWillMount(){
    const asyncawaitGetRequest = async () => {
      let response  = await axios.get(`/user/${this.username}`);
      if (response.data.result){
        this.setState({
          user : response.data.result
        }, () => {
          this.userFound();
        })
      }else {
        console.log('user not found')
        this.setState({
          userFound : false,
          loading : false
        })
      }
    }
    asyncawaitGetRequest();
  }
  userFound = () =>{
    axios.get(`/post/${this.username}`)
    .then(result => {
      if(result.data.length <= 0){
        this.setState({
          noPosts : true,
          loading : false
        })
      }
      return result.data.posts;
    }).then(posts => {
      posts.forEach(post => {
        this.postsArray.unshift(<Post
          deletePost = {this.deletePost}
          key = {post._id}
          postID = {post._id}
          user = {post.user}
          PPP = {post.profile_picture_path}
          date = {moment(post.date).format('DD-MM-YYYY')}
          image_path = {post.image_path}
          image_uuid = {post.image_uuid}
          content = {post.content}
          reacts = {post.reacts}
        />);
      });
      this.setState({
        postsArray : this.postsArray,
        loading : false
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
  render() {
    return (
      <div style= {style.profileContainer}>
          <NavBar />
          {
            this.state.loading ? 
              <Loading/> 
            : this.state.userFound ?
                <React.Fragment>
                  <div className="container" style = {style.container}>
                    <ProfileHeader user = {this.state.user}/>
                  </div>
                  <div className=" container " style = {style.container} id="profilePostsContainer">
                    {
                      this.state.noPosts ?
                        <div style={style.noPosts}><h5>No Posts Yet</h5></div>
                      :
                        <div>{this.postsArray}</div>
                    }
                  </div>
                </React.Fragment>
              :
                <UserNotFound/>
          }
          <Footer/>
      </div>
    )
  }
}

export default Profile
