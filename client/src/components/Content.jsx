import React, { Component } from 'react';
import Post from './Post.jsx';

const style = {
    container : {
        marginTop : 50,
        marginRight : 'auto',
        marginLeft : 'auto',
        padding : 30
    }
}

class Content extends Component {
  render() {
    return (
      <div className="container card " style = {style.container}>
        <Post />
      </div>
    )
  }
}

export default Content
