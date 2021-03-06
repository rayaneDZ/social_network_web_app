import React, { Component } from 'react';
import axios from 'axios';
import '../css/postreactions.css';

const style ={
    reacts_container : {
        display : 'flex',
        marginBottom : 0
    },
    react_button : {
        borderStyle : 'none',
        width: '100%',
        display : 'flex',
        justifyContent : 'center'
    },
    inputField :{
      marginBottom : 14.5
    },
    commentInput : {
      margin : 0,
      marginRight : 10,
      padding: 5,
      height : 25,
      borderStyle : 'none',
      border : '1px solid black',
      borderRadius : '5px',
      width : 'calc(100% - 20px)'
    },
    btnColor : {
      backgroundColor : '#673ab7',
      color : 'white',
  }
}

class PostReactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment : false,
      likeNumber : this.props.reacts.like.number,
      dislikeNumber : this.props.reacts.dislike.number
    }
    if(this.props.reacts.like.liked_by.includes(localStorage.getItem('username'))){
      this.state.likedByUser = true
    }
    if(this.props.reacts.dislike.disliked_by.includes(localStorage.getItem('username'))){
      this.state.dislikedByUser = true
    }
  }
  toggleComment = () =>{
    this.setState({
      comment : !this.state.comment
    });
  }
  likePost = () => {
    const data = {
      'postID' : this.props.postID,
      'user' : localStorage.getItem('username')
    }
    axios({
      method : 'post',
      url : '/api/post/like',
      data : data,
      headers : {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      const code = response.data.code
      if( code === 0){
        this.setState({
          likeNumber : this.state.likeNumber + 1,
          likedByUser : true
        })
      }else if(code === 1){
        this.setState({
          likeNumber : this.state.likeNumber - 1,
          likedByUser : false
        })
      }else if (code === 2){
        this.setState({
          likeNumber : this.state.likeNumber + 1,
          likedByUser : true,
          dislikeNumber : this.state.dislikeNumber - 1,
          dislikedByUser : false
        })
      }
    }).catch(err => {
      if(err.response.data.message === "Auth failed"){
        alert('you need to LOG IN')
      }
    })
  }
  dislikePost = () => {
    const data = {
      'postID' : this.props.postID,
      'user' : localStorage.getItem('username')
    }
    axios({
      method : 'post',
      url : '/api/post/dislike',
      data : data,
      headers : {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      const code = response.data.code;
      if(code === 0){
        this.setState({
          dislikeNumber : this.state.dislikeNumber + 1,
          dislikedByUser : true
        })
      }else if(code === 1){
        this.setState({
          dislikeNumber : this.state.dislikeNumber - 1,
          dislikedByUser : false
        })
      }else if(code === 2){
        this.setState({
          dislikeNumber : this.state.dislikeNumber + 1,
          dislikedByUser : true,
          likeNumber : this.state.likeNumber - 1,
          likedByUser : false
        })
      }
    }).catch(err => {
      if(err.response.data.message === "Auth failed"){
        alert('you need to LOG IN')
      }
    })
  }
  addCommentToPost = () => {
    const user = localStorage.getItem('username');
    const content = document.getElementById('commentContent').value;
    const data = {
      'user' : user,
      'content' : content,
      'postID' : this.props.postID
    }
    axios({
      method : 'post',
      url : '/api/post/comment',
      data : data,
      headers : {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      this.setState({
        comment : !this.state.comment
      });
      this.props.addCommentToPost(user, content, res.data.ObjectID);
    }).catch(err => {
      if(err.response.data.message === "Auth failed"){
        alert('you need to LOG IN')
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <div style = {style.reacts_container}>
          <button className={"btn-flat waves-effect waves-light" + (this.state.likedByUser ? " changeColor" : "")} style={style.react_button} onClick={this.likePost}><i className="far fa-thumbs-up" style={{marginRight : 10}}></i>{this.state.likeNumber}</button>
          <button className={"btn-flat waves-effect waves-light" + (this.state.dislikedByUser ? " changeColor" : "")} style={style.react_button} onClick={this.dislikePost}><i className="far fa-thumbs-down" style={{marginRight : 10}}></i>{this.state.dislikeNumber}</button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.toggleComment}><i className="far fa-comment-alt" style={{marginRight : 10}}></i>{this.props.numberOfComments}</button>
        </div>
        {
          this.state.comment ? 

            <div style={{display : 'flex', alignItems: 'center', marginTop : 10}} id="commentInput">
              <input type="text" placeholder="comment" style={style.commentInput} id="commentContent"/>
              <button className="btn-flat" style = {style.btnColor} onClick={this.addCommentToPost}>Comment</button>
            </div>
            
          : 
            <div></div>
        }
        
      </React.Fragment>
    )
  }
}

export default PostReactions
