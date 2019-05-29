import React, { Component } from 'react';
import '../css/profileheader.css';
import ImageCompressor from 'image-compressor.js';
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import axios from 'axios';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY-dZa1WKDoQHyaTToPBQQosqpYTs-zlY",
  authDomain: "social-network-021998.firebaseapp.com",
  databaseURL: "https://social-network-021998.firebaseio.com",
  projectId: "social-network-021998",
  storageBucket: "social-network-021998.appspot.com",
  messagingSenderId: "480768291467",
  appId: "1:480768291467:web:638d4218b53e24d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class ProfileHeader extends Component {
  state = {
    toggleEdit : false,
    ppp : this.props.user.profile_picture_path
  }
  toggleEdit = () => {
    this.setState({
      toggleEdit : !this.state.toggleEdit
    })
  }
  handleFile = (e) =>{
    const image = e.target.files[0]
    const _this = this
    new ImageCompressor(image, {
      quality: .6,
      success(result) {
        _this.uploadToFirebase(result);
      },
      error(e) {
        console.log(e.message);
      },
    });
  }
  uploadToFirebase = (compressedImage) => {
    console.log(compressedImage)
    // Upload file and metadata to the object 'profile_pictures/"name".jpg'
    const uploadTask = firebase.storage().ref().child('profile_pictures/' + compressedImage.name).put(compressedImage);

    // // Pause the upload
    // uploadTask.pause();

    // // Resume the upload
    // uploadTask.resume();

    // // Cancel the upload
    // uploadTask.cancel();

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on("state_changed", (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case "paused":
            console.log('Upload is paused');
            break;
          case "running":
            console.log('Upload is running');
            break;
        }
      }, (error) =>{
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.log('dont have permission')
          break;
        case 'storage/canceled':
          // User canceled the upload
          console.log('upload canceled')
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          console.log('unknow error')
          break;
      }
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        axios.post('http://localhost:5000/user/updateProfilePicture', {
          username : this.props.user.username,
          ppp : downloadURL
        }).then(()=>{
          this.setState({
            ppp : downloadURL
          })
        })
      });
    });
  }
  render() {
    return (
      <div id="PHContainer">
          <img src={this.state.ppp} id="PHProfilePicture"/>
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
