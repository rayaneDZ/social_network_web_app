import React, { Component } from 'react';
import PostHeading from './PostHeading.jsx';
import PostContent from './PostContent.jsx';
import PostReactions from './PostReactions.jsx';
import PostComments from './PostComments.jsx';
import LikesAndComments from './LikesAndComments.jsx';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments : false
    }
  }
  toggleComments = () => {
    this.setState({
      comments : !this.state.comments
    });
  }
  render() {
    return (
        <React.Fragment>
            <PostHeading/>
            <PostContent/>
            <LikesAndComments handler = {this.toggleComments}/>
            <PostReactions/>
            {
              this.state.comments ?
              <React.Fragment>
                <PostComments/>
                <PostComments/>
              </React.Fragment>
              :
                <div style = {{display : 'none'}}></div>
            }
        </React.Fragment>
    )
  }
}

export default Post
