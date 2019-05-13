import React, { Component } from 'react';
import '../css/profileheader.css';

class ProfileHeader extends Component {
  render() {
    return (
      <div id="PHContainer">
          <div id="PHProfilePicture"></div>
          <h3>Username</h3>
          <p>BIO</p>
          <div id="followContainer">
            <div style={{display : 'flex', marginBottom : 20}}>
              <div className="followContainer">
                <p>0</p>
                <p>Following</p>
              </div>
              <div className="followContainer">
                <p>0</p>
                <p>Followers</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
      </div>
    )
  }
}

export default ProfileHeader
