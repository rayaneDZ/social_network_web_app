import React, { Component } from 'react'

const style = {
    content : {
        paddingLeft : 50,
        marginBottom : 30
    }
}

class PostContent extends Component {
  render() {
    return (
        <div className="content" style ={style.content}>
            <p>this is a content</p>
        </div>
    )
  }
}

export default PostContent;