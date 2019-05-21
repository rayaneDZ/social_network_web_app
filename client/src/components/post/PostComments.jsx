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
                <h6 style={style.username}>{this.props.user}</h6>
            </div>
            <p style={style.commentContent}>
                {this.props.content}
            </p>
        </div>
    )
  }
}

export default PostComments
