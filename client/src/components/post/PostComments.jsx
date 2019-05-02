import React, { Component } from 'react'

const style = {
    comment : {
        marginTop : 10
    },
    username : {
        fontWeight : 'bold',
        marginRight: 20
    },
    userdata : {
        display : 'flex'
    },
    commentContent : {
        margin : 0,
        marginLeft : 20
    }
}

class PostComments extends Component {
  render() {
    return (
        <div style={style.comment}>
            <div style={style.userdata}>
                <h6 style={style.username}>Username</h6>
                <h6>timestamp</h6>
            </div>
            <p style={style.commentContent}>
                This is a comment example
            </p>
        </div>
    )
  }
}

export default PostComments
