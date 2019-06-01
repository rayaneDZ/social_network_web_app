import React, { Component } from 'react';
import axios from 'axios';
import '../css/postcomments.css'

const style = {
    comment : {
        marginTop : 10,
        border : '1px solid #673ab7',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius : 5,
        padding: 10,
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'space-between'
    },
    username : {
        fontWeight : 'bold',
        margin : 0
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
  deleteComment = () => {
    const data = {
        'postID' : this.props.postID,
        'commentID' : this.props.id
    }
    axios({
        method : 'post',
        url : '/api/post/deleteComment',
        data : data,
        headers : {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(() => {
        this.props.deleteCommentFromPost(this.props.id)
    }).catch(err => {
        if(err.response.data.message === "Auth failed"){
          alert('you need to LOG IN')
        }
    })
  }
  render() {
    return (
        <div style={style.comment} id={this.props.id}>
            <div>
                <div style={style.userdata}>
                    <h6 style={style.username}><a href = {`/profile/${this.props.user}`}>{this.props.user}</a></h6>
                </div>
                <p style={style.commentContent}>{this.props.content}</p>
            </div>
            {
                this.props.user === localStorage.getItem('username') ? 
                    <i className="fa fa-trash commentTrash" style={{marginRight : 10}} onClick={this.deleteComment}></i>
                : 
                    <React.Fragment></React.Fragment>
            }
        </div>
    )
  }
}

export default PostComments
