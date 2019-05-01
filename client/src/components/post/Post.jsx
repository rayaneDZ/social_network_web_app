import React, { Component } from 'react';
import PostHeading from './PostHeading.jsx';
import PostContent from './PostContent.jsx';
import PostReactions from './PostReactions.jsx';
import PostComments from './PostComments.jsx';

class Post extends Component {
  render() {
    return (
        <React.Fragment>
            <PostHeading/>
            <PostContent/>
            <PostReactions/>
            <PostComments/>
            <PostComments/>
        </React.Fragment>
    )
  }
}

export default Post
