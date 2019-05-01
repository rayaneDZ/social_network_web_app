import React, { Component } from 'react';
import Post_Heading from './Post_Heading.jsx';
import Post_Content from './Post_Content.jsx';
import Post_Reactions from './Post_Reactions.jsx';


class Post extends Component {
  render() {
    return (
        <React.Fragment>
            <Post_Heading/>
            <Post_Content/>
            <Post_Reactions/>
        </React.Fragment>
    )
  }
}

export default Post
