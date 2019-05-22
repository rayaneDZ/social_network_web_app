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
      comments : false
    }
    this.commentsComponentsArray = [];
  }
  componentDidMount(){
    let parsedComments = []
    const arrayOfStringComments = this.props.reacts.comment.content;
    //parse the response into objects
    arrayOfStringComments.forEach(comment => {
      parsedComments.push(JSON.parse(comment))
    })

    parsedComments.forEach(comment => {
      this.commentsComponentsArray.push(<PostComments
        user = {Object.keys(comment)}
        content = {Object.values(comment)}
        key = {parsedComments.indexOf(comment)}
      />)
    })
  }
  toggleComments = () => {
    this.setState({
      comments : !this.state.comments
    });
  }
  render() {
    return (
        <div className = "card" id="postContainer">
            <PostHeading user = {this.props.user} date = {this.props.date} PPP = {this.props.PPP}/>
            <PostContent content = {this.props.content}/>
            {this.props.reacts.comment.number > 0 ? <ShowComments handler = {this.toggleComments}/> : <div></div>}
            <PostReactions postID = {this.props.postID} reacts = {this.props.reacts}/>
            {
              this.state.comments ?
              <React.Fragment>
                {this.commentsComponentsArray}
              </React.Fragment>
              :
                <div></div>
            }
        </div>
    )
  }
}

export default Post
