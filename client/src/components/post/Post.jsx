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
    this.parsedComments = this.props.reacts.comment.content;
  }
  componentDidMount(){
    // now this.parsedComments = [{user : user0, content : content0, commentID : commentID0}, {user : user1, content : content1, commentID : commentID1}]
    this.parsedComments.forEach(comment => {
      this.commentsComponentsArray.push(<PostComments
        user = {Object.values(comment)[0]}// returns user0
        content = {Object.values(comment)[1]}// returns content0
        key = {Object.values(comment)[2]} //returns commentID0
        id = {Object.values(comment)[2]}
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
    //this function is passed as a prop to PostReactions
    //It is  invoked when you click the submit comment button
    //in order to show the comment without hitting the database
    this.parsedComments.push({
      user : user,
      content : content,
      commentID : commentID
    })
    this.commentsComponentsArray.push(<PostComments
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
  deleteCommentFromPost = (user, content, commentID) => {
    //this function is passed as a prop to PostReactions
    //It is  invoked when you click the submit comment button
    //in order to show the comment without hitting the database
    this.parsedComments.forEach(comment => {
      if ( comment.commentID === commentID){
        this.parsedComments.splice(this.parsedComments.indexOf(comment), 1)
      }
    })
    this.commentsComponentsArray = [];
    this.parsedComments.forEach(comment => {
      this.commentsComponentsArray.push(<PostComments
        user = {Object.values(comment)[0]}// returns user0
        content = {Object.values(comment)[1]}// returns content0
        key = {Object.values(comment)[2]} //returns commentID0
        id = {Object.values(comment)[2]}
        postID = {this.props.postID}
        deleteCommentFromPost = {this.deleteCommentFromPost} 
      />)
    })
    this.setState({
      commentsComponentsArray : this.commentsComponentsArray,
      numberOfComments : this.state.numberOfComments - 1
    })
  }
  render() {
    return (
        <div className = "card" id="postContainer">
            <PostHeading user = {this.props.user} date = {this.props.date} PPP = {this.props.PPP}/>
            <PostContent content = {this.props.content}/>
            {this.state.numberOfComments > 0 ? <ShowComments handler = {this.toggleComments}/> : <div></div>}
            <PostReactions postID = {this.props.postID} reacts = {this.props.reacts} addCommentToPost = {this.addCommentToPost} numberOfComments = {this.state.numberOfComments}/>
            {
              this.state.comments ?
              <React.Fragment>
                {this.state.commentsComponentsArray}
              </React.Fragment>
              :
                <div></div>
            }
        </div>
    )
  }
}

export default Post
