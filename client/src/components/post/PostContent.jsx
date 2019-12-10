import React, { Component } from 'react';
import '../css/postcontent.css'

const style = {
    content : {
        paddingLeft : 0,
        marginBottom : 15
    }
}

class PostContent extends Component {
  render() {
    return (
        <div className="content" style ={style.content} id="postContent">
            <p>{this.props.content}</p>
            {
              this.props.image_path.length > 0 ?
              <div className="post_image_container">
               <img src ={this.props.image_path} alt="media for the post" style={{width : '100%'}}/>
              </div>
              :
                <React.Fragment></React.Fragment>
            }
        </div>
    )
  }
}

export default PostContent;