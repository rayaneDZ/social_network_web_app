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
        this.props.makePostCallback(response.data)
      })
    }
  }
  render() {
    return (
      <div id="makepostcontainer" className="card">
        <textarea placeholder="what's on your mind" id="textareaContent"></textarea>
        <button className="btn-flat" style = {style.btnColor} onClick={this.handlePost}>Post</button>
      </div>
    )
  }
}

export default MakePost
