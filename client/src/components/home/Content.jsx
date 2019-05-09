import React, { Component } from 'react';
import Post from '../post/Post.jsx';
import MakePost from '../MakePost.jsx'

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto'
    }
}

class Content extends Component {
  render() {
    return (
      <div className="container" style = {style.container}>
        <MakePost/>
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default Content
