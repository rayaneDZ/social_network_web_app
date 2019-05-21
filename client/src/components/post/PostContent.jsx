import React, { Component } from 'react';
import '../css/postcontent.css'

const style = {
    content : {
        paddingLeft : 50,
        marginBottom : 15
    }
}

class PostContent extends Component {
  render() {
    return (
        <div className="content" style ={style.content} id="postContent">
            <p>{this.props.content}</p>
        </div>
    )
  }
}

export default PostContent;