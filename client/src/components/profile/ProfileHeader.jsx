import React, { Component } from 'react';
import '../css/profileheader.css';
import ImageCompressor from 'image-compressor.js';

class ProfileHeader extends Component {
  state = {
    toggleEdit : false
  }
  toggleEdit = () => {
    this.setState({
      toggleEdit : !this.state.toggleEdit
    })
  }
  handleFile = (e) =>{
    const image = e.target.files[0]
    console.log(image)
    new ImageCompressor(image, {
      quality: .6,
      success(result) {
        const formData = new FormData();
  
        formData.append('image', result, result.name);
  
        console.log(result)
      },
      error(e) {
        console.log(e.message);
      },
    });
  }
  render() {
    return (
      <div id="PHContainer">
          <div id="PHProfilePicture"></div>
          <h3>{this.props.user.username}</h3>
          {this.props.user.username !== localStorage.getItem('username') ? <div></div> : <button id="editProfileButton" onClick = {this.toggleEdit}>Edit Profile</button>}
          {
            this.state.toggleEdit ?
              <div id ="editProfileDiv">
                <input type="file" onChange={this.handleFile} style={{display :'none'}} ref={fileInput => this.fileInput = fileInput} accept="image/*"/>
                <div className="editProfileSubButtons" onClick={() => this.fileInput.click()}>
                  {localStorage.getItem('profile_picture_path').length > 0 ? "Change Profile Picture" : "Add Profile Picture"} 
                </div>
                <div className="editProfileSubButtons">
                  Edit Bio
                </div>
              </div>
            :
              <React.Fragment></React.Fragment>
          
          }
          <p>{this.props.user.bio}</p>
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
            {this.props.user.username === localStorage.getItem('username') ? <div></div> : <button>Follow</button>}
          </div>
      </div>
    )
  }
}

export default ProfileHeader
