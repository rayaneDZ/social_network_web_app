import React, { Component } from 'react';
import Post from '../post/Post.jsx';

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto',
        padding : 30
    },
    hr : {
      marginTop : 20,
      marginBottom : 20
    }
}

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className=" card " style = {style.container}>
          <Post />
          <hr style={style.hr}/>
          <Post />
          <hr style={style.hr}/>
          <Post />
        </div>
      </div>
    )
  }
}

export default Content
