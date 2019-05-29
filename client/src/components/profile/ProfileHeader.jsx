import React, { Component } from 'react';
import '../css/profileheader.css';
import ImageCompressor from 'image-compressor.js';
import  firebase from 'firebase/app';
import 'firebase/storage';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class ProfileHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleEdit : false,
      ppp : this.props.user.profile_picture_path,
      pp_uuid : this.props.user.pp_uuid
    }
    this.pp_uuid = ""
  }
  //this uuid is declared so i can submit it to database along with the url of the image
  //(which already contains the uuid but it is hard to extract)
  //the image name in firebase is the uuid but it's link is not the uuid
  //so i have to store the uuid in order to delete it when the user updates the image
  toggleEdit = () => {
    this.setState({
      toggleEdit : !this.state.toggleEdit
    })
    console.log(this.props.user)
  }
  handleFile = (e) =>{
    const image = e.target.files[0]
    const _this = this
    console.log(image.size)
    const compressDownTo = 500000

    if(image.size > compressDownTo){
      console.log('compressing...')
      const quality = 1/(image.size/compressDownTo);
      new ImageCompressor(image, {
        quality: quality,
        success(compressedImage) {
          _this.uploadToFirebase(compressedImage);
        },
        error(e) {
          console.log(e.message);
        },
      });
    }else{
      console.log('upload without compressing')
      this.uploadToFirebase(image)
    }
  }
  uploadToFirebase = (compressedImage) => {
    console.log(compressedImage)
    // Upload file and metadata to the object 'profile_pictures/"name".jpg'
    this.pp_uuid = uuidv1()
    const uploadTask = firebase.storage().ref().child('profile_pictures/' + this.pp_uuid).put(compressedImage);
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
          default:
            //default case
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
        default:
          //default case
      }
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

        //delete old profile picture from firebase if it exists
        console.log(this.state.pp_uuid, this.state.pp_uuid.length)
        if(this.state.pp_uuid.length > 0){
          console.log('deleting old pp ...')
          firebase.storage().ref().child('profile_pictures/' + this.state.pp_uuid).delete()
          .then(() => {
            console.log('old pp deleted successfully')
          }).catch(() => {
            console.log('old pp could not be deleted')
          })
        }
        console.log('File available at', downloadURL);
        console.log('this.uuid' , this.pp_uuid)
        axios.post('http://localhost:5000/user/updateProfilePicture', {
          username : this.props.user.username,
          ppp : downloadURL,
          pp_uuid : this.pp_uuid
        }).then(()=>{
          this.setState({
            ppp : downloadURL,
            pp_uuid : this.pp_uuid
          })
        })
      });
    });
  }
  render() {
    return (
      <div id="PHContainer">
          {
            this.state.ppp.length > 0 ?
              <img src={this.state.ppp} id="PHProfilePicture" alt="profile pic of the user"/>
            :
              <div style={{height: 200, width: 200, borderRadius : "50%", backgroundColor : "grey"}}></div>
          }
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
