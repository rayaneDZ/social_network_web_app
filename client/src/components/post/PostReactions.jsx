import React, { Component } from 'react';
import axios from 'axios';

const style ={
    reacts_container : {
        display : 'flex',
        marginBottom : 0
    },
    react_button : {
        borderStyle : 'none',
        width: '100%',
        display: 'flex',
        justifyContent : 'space-around'
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
      color : 'white'
  }
}

class PostReactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment : false
    }
  }
  toggleComment = () =>{
    this.setState({
      comment : !this.state.comment
    });
  }
  likePost = () => {
    axios.post('/post/like', {
      'postID' : this.props.postID,
      'user' : localStorage.getItem('username')
    })//handle the response based on 'code' response from server
  }
  dislikePost = () => {
    axios.post('/post/dislike', {
      'postID' : this.props.postID,
      'user' : localStorage.getItem('username')
    })
  }
  submitComment = () => {
    const content = document.getElementById('commentContent').value;
    axios.post('/post/comment', {
      'user' : localStorage.getItem('username'),
      'content' : content,
      'postID' : this.props.postID
    })
    this.setState({
      comment : !this.state.comment
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style = {style.reacts_container}>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.likePost}><i className="material-icons">thumb_up</i>{this.props.reacts.like.number}</button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.dislikePost}><i className="material-icons">thumb_down</i>{this.props.reacts.dislike.number}</button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.toggleComment}><i className="material-icons">comment</i>{this.props.reacts.comment.number}</button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button}><i className="material-icons">share</i></button>
        </div>
        {
          this.state.comment ? 
            <div style={{display : 'flex', alignItems: 'center', marginTop : 10}}>
              <input type="text" placeholder="comment" style={style.commentInput} id="commentContent"/>
              <button className="btn-flat" style = {style.btnColor} onClick={this.submitComment}>Comment</button>
            </div>
            
          : 
            <div></div>
        }
        
      </React.Fragment>
    )
  }
}

export default PostReactions
