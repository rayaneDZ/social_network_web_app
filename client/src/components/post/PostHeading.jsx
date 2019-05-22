import React, { Component } from 'react';
import '../css/postheading.css'

const style = {
    flex : {
        display : 'flex'
    },
    metadata_picture : {
        height : 50,
        width : 50,
        borderRadius : '50%',
        backgroundColor : 'grey',
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
  render() {
    return (
        <div className="heading" style = {style.heading}>
            <div className="metadata" style = {style.flex}>
                <div className="profil_picture" style={style.metadata_picture}></div>
                <div className="info">
                    <div className="user_name" style={{fontWeight:'bold'}}><a href = {`/profile/${this.props.user}`}>{this.props.user}</a></div>
                    <div className="when"><p style={{fontSize : 10, margin : 0}}>{this.props.date}</p></div>
                </div>
            </div>
            <button style = {style.button} onClick={this.toggleDropDown}><i className="fa fa-ellipsis-v" style={{fontSize : 26}}></i></button>
            <div id="postDropDown" ref={input => {this.myDropDown = input}}>
                <div><i className="fa fa-ban " style={{marginRight : 10}}></i>Hide</div>
                <div><i className="fa fa-exclamation " style={{marginRight : 10}}></i>Report</div>
                <div><i className="fa fa-check " style={{marginRight : 10}}></i>Save</div>
                {this.props.user === localStorage.getItem('username') ?
                    <div><i className="fa fa-trash " style={{marginRight : 10}}></i>Delete</div>
                :
                    <div></div>
                }                
            </div>
        </div>
    )
  }
}

export default PostHeading;
