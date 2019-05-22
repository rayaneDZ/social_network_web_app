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
      parsedComments : []
    }
    this.commentsComponentsArray = [];
  }
  componentDidMount(){
    const parsedComments = this.props.reacts.comment.content;
    // now parsedComments = [{user : user0, content : content0, commentID : commentID0}, {user : user1, content : content1, commentID : commentID1}]
    parsedComments.forEach(comment => {
      this.commentsComponentsArray.push(<PostComments
        user = {Object.values(comment)[0]}// returns user0
        content = {Object.values(comment)[1]}// returns content0
        key = {Object.values(comment)[2]} //returns commentID0
        id = {Object.values(comment)[2]} 
      />)
    })

    //set the state so that I can update post whenever I submit a comment
    this.setState({
      parsedComments : this.commentsComponentsArray
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
    this.commentsComponentsArray.push(<PostComments
      user = {user}
      content = {content}
      key = {commentID}
      id = {commentID}
    />)
    this.setState({
      parsedComments : this.commentsComponentsArray
    })
  }
  render() {
    return (
        <div className = "card" id="postContainer">
            <PostHeading user = {this.props.user} date = {this.props.date} PPP = {this.props.PPP}/>
            <PostContent content = {this.props.content}/>
            {this.props.reacts.comment.number > 0 ? <ShowComments handler = {this.toggleComments}/> : <div></div>}
            <PostReactions postID = {this.props.postID} reacts = {this.props.reacts} addCommentToPost = {this.addCommentToPost}/>
            {
              this.state.comments ?
              <React.Fragment>
                {this.state.parsedComments}
              </React.Fragment>
              :
                <div></div>
            }
        </div>
    )
  }
}

export default Post
