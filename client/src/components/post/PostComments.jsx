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
        marginLeft : 20,
        display : 'flex',
        justifyContent : 'space-between'
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
