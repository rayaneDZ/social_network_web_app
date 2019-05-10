import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import Post from '../post/Post.jsx';

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto'
    },
    profileContainer : {
      height : '100%',
      backgroundColor : '#e9ebee'
    }
}


class Profile extends Component {
  render() {
    return (
      <div style= {style.profileContainer}>
          <NavBar />
          <div className="container card " style = {style.container}>
            <ProfileHeader/>
          </div>
          <div className=" container " style = {style.container}>
            <Post />
            <Post />
            <Post />
          </div>
      </div>
    )
  }
}

export default Profile
