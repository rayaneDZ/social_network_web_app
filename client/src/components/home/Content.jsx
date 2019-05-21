import React, { Component } from 'react';
import Post from '../post/Post.jsx';
import MakePost from '../MakePost.jsx'
import Loading from '../Loading.jsx';
import axios from 'axios';
import moment from 'moment';

const style = {
    container : {
        marginTop : 20,
        marginRight : 'auto',
        marginLeft : 'auto'
    }
}

let postsArray = [];

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading  : true
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/post', {

    }).then(result => {
      console.log(result.data)
      this.setState({
        loading : false
      });
      return result.data.posts;
    }).then(posts => {
      posts.forEach(post => {
        postsArray.push(<Post
          key = {post._id}
          user = {post.user}
          date = {moment(post.date).format('DD-MM-YYYY')}
          content = {post.content}
          reacts = {post.reacts}
        />);
      });
      this.forceUpdate();
    })
  }
  render() {
    return (
      <div className="container" style = {style.container} id="postsContainer">
        <MakePost/>

        {this.state.loading ? <Loading/> : <div>{postsArray}</div>}

      </div>
    )
  }
}

export default Content
