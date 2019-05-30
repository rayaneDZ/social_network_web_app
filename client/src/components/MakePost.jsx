import React, { Component } from 'react';
import axios from 'axios';
import ImageCompressor from 'image-compressor.js';
import uuidv1 from 'uuid/v1';
import storage from '../index.js'
import './css/makepost.css';


const style = {
  btnColor : {
      backgroundColor : '#673ab7',
      color : 'white'
  }
}

class MakePost extends Component {
  handleFile = (e) => {
    const image = e.target.files[0]
    const _this = this
    const compressDownTo = 500000
    if(image.size > compressDownTo){
      const quality = 1/(image.size/compressDownTo);
      new ImageCompressor(image, {
        quality: quality,
        success(compressedImage) {
          this.image = compressedImage
          _this.previewFile(compressedImage)
        },
        error(e) {
          console.log(e.message);
        },
      });
    }else{
      this.image = image
      this.previewFile(image)
    }
  }
  previewFile = (image) => {
    var reader  = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", function () {
        const src = reader.result;
        document.getElementById('makePostImageContainer').innerHTML = `<img src="${src}" height="100" alt="Image preview..." id="imagePreview"/>`
    }, false);
  }
  handlePost = () => {
    const username = localStorage.getItem('username');
    const content = document.getElementById('textareaContent').value;
    const image = this.image
    if(content.length > 0 && this.image){
      this.uploadToFirebase(image, content)
    }else if (content.length > 0 && !this.image){
      this.postRequestToBackend(username, content);
    }else if (content.length <= 0 && this.image){
      //make upload to firebase a separate function
      this.uploadToFirebase(image)
    }
  }
  uploadToFirebase = (image, content) => {
    this.progressBar = document.getElementById('makePostProgressBar');
    this.progressBar.style.display = 'block'
    this.image_uuid = uuidv1()
    const username = localStorage.getItem('username');
    const uploadTask = storage.ref().child('posts_pictures/' + this.image_uuid).put(image);
    uploadTask.on("state_changed", (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      document.getElementById('determinate').style.width = progress + '%'
    }, () =>{
      console.log('error occured in uploadtaks to firebase')
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        this.postRequestToBackend(username, content, downloadURL, this.image_uuid);
      });
    });
  }
  postRequestToBackend = (username, content, image_path, image_uuid) => {
    axios.post('/post', {
      'content' : content,
      'username' : username,
      'image_path' : image_path,
      'image_uuid' : image_uuid
    }).then(response => {
      document.getElementById('textareaContent').value = "";
      if(document.getElementById('imagePreview')){
        document.getElementById('imagePreview').style.display = 'none';
        this.progressBar.style.display = 'none';
      }
      this.image = null
      //pass the response to Content component in order to populate a new post
      this.props.addPost(response.data)
    })
  }
  render() {
    return (
      <div className="card">
        <div id="makepostcontainer">
          <textarea placeholder="what's on your mind" id="textareaContent"></textarea>
          <div id="makePostImageContainer"></div>
          <div style={{display : 'flex', alignItems : 'center'}}>
            <button className="btn-flat" style = {style.btnColor} onClick={this.handlePost}>Post</button>
            <input type="file" onChange={this.handleFile} style={{display :'none'}} ref={fileInput => this.fileInput = fileInput} accept="image/*"/>
            <i className="far fa-image" id="makePostImageIcon" onClick={() => this.fileInput.click()}></i>
          </div>
        </div>
        <div className="progress" style={{width : '100%', display : 'none', backgroundColor : '#ab7efb', margin : 0}} id="makePostProgressBar">
          <div className="determinate" id="determinate" style={{width : '0%', backgroundColor : '#673ab7'}}></div>
        </div>
      </div>
    )
  }
}

export default MakePost
