import React, { Component } from 'react';
import Post from '../post/Post.jsx';

const style = {
    container : {
        marginTop : 50,
        marginRight : 'auto',
        marginLeft : 'auto',
        padding : 30
    },
    hr : {
      marginTop : 50,
      marginBottom : 20
    }
}

class Content extends Component {
  render() {
    return (
      <div className="container card " style = {style.container}>
        <Post />
        <hr style={style.hr}/>
        <Post />
        <hr style={style.hr}/>
        <Post />

      </div>
    )
  }
}

export default Content
