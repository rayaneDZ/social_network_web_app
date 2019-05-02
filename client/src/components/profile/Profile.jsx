import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import Post from '../post/Post.jsx';

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto',
        padding : 30
    },
    hr : {
      marginTop : 50,
      marginBottom : 20
    }
}


class Profile extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar />
          <div className="container card " style = {style.container}>
            <ProfileHeader/>
          </div>
          <div className="container card " style = {style.container}>
            <Post />
            <hr style={style.hr}/>
            <Post />
            <hr style={style.hr}/>
            <Post />
          </div>
      </React.Fragment>
    )
  }
}

export default Profile
