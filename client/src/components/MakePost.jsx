import React, { Component } from 'react';
import axios from 'axios';
import './css/makepost.css'

const style = {
  btnColor : {
      backgroundColor : '#673ab7',
      color : 'white'
  }
}

class MakePost extends Component {
  handlePost = () => {
    const content = document.getElementById('textareaContent').value;
    const username = localStorage.getItem('username');
    if(content.length > 0){
      axios.post('http://localhost:5000/post', {
        'content' : content,
        'username' : username
      }).then(response => {
        document.getElementById('textareaContent').value = "";
        //pass the response to Content component in order to populate a new post
        this.props.addPost(response.data)
      })
    }
  }
  render() {
    return (
      <div id="makepostcontainer" className="card">
        <textarea placeholder="what's on your mind" id="textareaContent"></textarea>
        <div style={{display : 'flex', alignItems : 'center'}}>
          <button className="btn-flat" style = {style.btnColor} onClick={this.handlePost}>Post</button>
          <form>
          <i className="far fa-image" id="makePostImageIcon"></i>
          </form>
        </div>
      </div>
    )
  }
}

export default MakePost
