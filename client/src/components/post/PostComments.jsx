import React, { Component } from 'react';
import axios from 'axios';

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
        marginLeft : 20,
        display : 'flex',
        justifyContent : 'space-between'
    }
}

class PostComments extends Component {
  deleteComment = () => {
    axios.post('/post/deleteComment', {
        'postID' : this.props.postID,
        'commentID' : this.props.id
    }).then(() => {
        this.props.deleteCommentFromPost(this.props.id)
    })
  }
  render() {
    return (
        <div style={style.comment} id={this.props.id}>
            <div style={style.userdata}>
                <h6 style={style.username}>{this.props.user}</h6>
            </div>
            <p style={style.commentContent}>
                {this.props.content}

                {
                this.props.user === localStorage.getItem('username') ? 
                    <i className="fa fa-trash " style={{marginRight : 10}} onClick={this.deleteComment}></i>
                : 
                    <React.Fragment></React.Fragment>
                }

            </p>
        </div>
    )
  }
}

export default PostComments
