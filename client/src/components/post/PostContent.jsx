import React, { Component } from 'react'

const style = {
    content : {
        paddingLeft : 50,
        marginBottom : 15
    }
}

class PostContent extends Component {
  render() {
    return (
        <div className="content" style ={style.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, harum laboriosam. Architecto sunt veniam doloribus perferendis vitae ex, doloremque delectus alias velit amet! Sint aperiam modi assumenda. Architecto, soluta officiis.</p>
        </div>
    )
  }
}

export default PostContent;