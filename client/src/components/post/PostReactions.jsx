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
      comment : false,
      likeNumber : this.props.reacts.like.number,
      dislikeNumber : this.props.reacts.dislike.number,
      commentsNumber : this.props.numberOfComments
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
    }).then(response => {
      const code = response.data.code
      if( code === 0){
        this.setState({
          likeNumber : this.state.likeNumber + 1
        })
      }else if(code === 1){
        this.setState({
          likeNumber : this.state.likeNumber - 1
        })
      }else if (code === 2){
        this.setState({
          likeNumber : this.state.likeNumber + 1,
          dislikeNumber : this.state.dislikeNumber - 1
        })
      }
    })
  }
  dislikePost = () => {
    axios.post('/post/dislike', {
      'postID' : this.props.postID,
      'user' : localStorage.getItem('username')
    }).then(response => {
      const code = response.data.code;
      if(code === 0){
        this.setState({
          dislikeNumber : this.state.dislikeNumber + 1
        })
      }else if(code === 1){
        this.setState({
          dislikeNumber : this.state.dislikeNumber - 1
        })
      }else if(code === 2){
        this.setState({
          dislikeNumber : this.state.dislikeNumber + 1,
          likeNumber : this.state.likeNumber - 1
        })
      }
    })
  }
  submitComment = () => {
    const content = document.getElementById('commentContent').value;
    axios.post('/post/comment', {
      'user' : localStorage.getItem('username'),
      'content' : content,
      'postID' : this.props.postID
    }).then((res) => {
      this.setState({
        comment : !this.state.comment,
        commentsNumber : this.state.commentsNumber + 1
      });
      const user = localStorage.getItem('username');
      this.props.addCommentToPost(user, content, res.data.ObjectID);
    })
  }
  render() {
    return (
      <React.Fragment>
        <div style = {style.reacts_container}>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.likePost}><i className="material-icons">thumb_up</i>{this.state.likeNumber}</button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.dislikePost}><i className="material-icons">thumb_down</i>{this.state.dislikeNumber}</button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.toggleComment}><i className="material-icons">comment</i>{this.props.numberOfComments}</button>
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
