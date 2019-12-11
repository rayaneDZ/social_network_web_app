import React, { Component } from 'react';
import axios from 'axios';
import storage from '../../index.js'
import '../css/postheading.css';

const style = {
    flex : {
        display : 'flex'
    },
    metadata_picture : {
        width : 50,
        backgroundColor : 'grey'
    },
    metadata_picture_container : {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '50%',
        marginRight : 20
    },
    heading : {
        display : 'flex',
        alignItems : 'flex-start',
        justifyContent : 'space-between'
    },
    button : {
        border : 'none',
        padding : 10,
        backgroundColor : 'transparent'
    }
}

class PostHeading extends Component {
  toggleDropDown = () =>{
    let dropdownOpacity = this.myDropDown.style.opacity;
    if(dropdownOpacity === '0'){
        this.myDropDown.style.visibility = "visible";
        this.myDropDown.style.opacity = "1";
    }else {
        this.myDropDown.style.visibility = "hidden";
        this.myDropDown.style.opacity = "0";
    }
  }
  deletePost = () => {
    const data = {
        'postId' : this.props.postID,
        'user' : localStorage.getItem('username')
    }
    axios({
        method : 'post',
        url : '/api/post/delete',
        data : data,
        headers : {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(() => {
        this.props.deletePost(this.props.postID)
        if(this.props.image_uuid){
            storage.ref().child('posts_pictures/' + this.props.image_uuid).delete()
            .then(() => {
            console.log('old pp deleted successfully')
            }).catch(() => {
            console.log('old pp could not be deleted')
            })
        }
    }).catch(err => {
        if(err.response.data.message === "Auth failed"){
          alert('you need to LOG IN')
        }
    })
  }
  render() {
    return (
        <div className="heading" style = {style.heading}>
            <div className="metadata" style = {style.flex}>
                {
                    this.props.PPP.length > 0 ?
                        <div style = {style.metadata_picture_container}>
                            <img src={this.props.PPP} style={style.metadata_picture} alt="profile pic of the user"/>
                        </div>
                    :
                        <div style={style.metadata_picture}></div>
                }
                <div className="info">
                    <div className="user_name" style={{fontWeight:'bold'}}><a href = {`/profile/${this.props.user}`}>{this.props.user}</a></div>
                    <div className="when"><p style={{fontSize : 10, margin : 0}}>{this.props.date}</p></div>
                </div>
            </div>
                {this.props.user === localStorage.getItem('username') ?
                    <React.Fragment>
                        <button style = {style.button} onClick={this.toggleDropDown}><i className="fa fa-ellipsis-v" style={{fontSize : 26}}></i></button>
                        <div id="postDropDown" ref={input => {this.myDropDown = input}}>
                            <div onClick={this.deletePost}><i className="fa fa-trash " style={{marginRight : 10}}></i>Delete</div>
                        </div>
                    </React.Fragment>
                :
                    <React.Fragment></React.Fragment>
                }                
        </div>
    )
  }
}

export default PostHeading;
