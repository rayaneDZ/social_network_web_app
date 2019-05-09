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
    console.log('clicked post')
  }
  render() {
    return (
      <div id="makepostcontainer" className="card">
        <textarea placeholder="what's on your mind"></textarea>
        <button className="btn-flat" style = {style.btnColor} onClick={this.handlePost}>Post</button>
      </div>
    )
  }
}

export default MakePost
