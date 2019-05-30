import React, { Component } from 'react';
import PostHeading from './PostHeading.jsx';
import PostContent from './PostContent.jsx';
import PostReactions from './PostReactions.jsx';
import PostComments from './PostComments.jsx';
import ShowComments from './ShowComments.jsx';
import '../css/post.css'

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments : false,
      numberOfComments : this.props.reacts.comment.number,
      commentsComponentsArray : []
    }
    this.commentsComponentsArray = [];
  }
  componentDidMount(){
    // now this.parsedComments = [{user : user0, content : content0, commentID : commentID0}, {user : user1, content : content1, commentID : commentID1}]
    const parsedComments = this.props.reacts.comment.content;

    parsedComments.forEach(comment => {
      this.commentsComponentsArray.unshift(<PostComments
        user = {comment.user}// returns user0
        content = {comment.content}// returns content0
        key = {comment.commentID} //returns commentID0
        id = {comment.commentID}
        postID = {this.props.postID}
        deleteCommentFromPost = {this.deleteCommentFromPost} 
      />)
    })
    //set the state so that I can update post whenever I submit a comment
    this.setState({
      commentsComponentsArray : this.commentsComponentsArray
    })
  }

  toggleComments = () => {
    this.setState({
      comments : !this.state.comments
    });
  }
  addCommentToPost = (user, content, commentID) => {
    this.commentsComponentsArray.unshift(<PostComments
      user = {user}
      content = {content}
      key = {commentID}
      id = {commentID}
      postID = {this.props.postID} 
      deleteCommentFromPost = {this.deleteCommentFromPost} 
    />)

    this.setState({
      commentsComponentsArray : this.commentsComponentsArray,
      numberOfComments : this.state.numberOfComments + 1
    })

  }
  deleteCommentFromPost = (commentID) => {
    //this function is passed as a prop to PostComments
    //It is  invoked when you click the submit comment button
    //in order to show the comment without hitting the database
    this.commentsComponentsArray.forEach(commentComponent => {
      if (commentComponent.key === commentID){
        this.commentsComponentsArray.splice(this.commentsComponentsArray.indexOf(commentComponent), 1)
      }
    })
    this.setState({
      commentsComponentsArray : this.commentsComponentsArray,
      numberOfComments : this.state.numberOfComments - 1
    })
    document.getElementById(commentID).style.display = 'none';
    
  }
  render() {
    return (
        <div className = "card" id="postContainer">
            <PostHeading user = {this.props.user} date = {this.props.date} PPP = {this.props.PPP} postID = {this.props.postID} deletePost = {this.props.deletePost} image_uuid = {this.props.image_uuid}/>
            <PostContent content = {this.props.content} image_path = {this.props.image_path}/>
            {this.state.numberOfComments > 0 ? <ShowComments handler = {this.toggleComments}/> : <div></div>}
            <PostReactions postID = {this.props.postID} reacts = {this.props.reacts} addCommentToPost = {this.addCommentToPost} numberOfComments = {this.state.numberOfComments} toggleComments = {this.toggleComments}/>
            {
              this.state.comments ?
              <React.Fragment>
                {this.state.commentsComponentsArray}
              </React.Fragment>
              :
                <React.Fragment></React.Fragment>
            }
        </div>
    )
  }
}

export default Post