import React, { Component } from 'react';
import '../css/postheading.css'


const href = '#'

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
    let dropdownval = document.getElementById('postDropDown').style.height;
    if(dropdownval === '0px'){
        document.getElementById('postDropDown').style.height = '124.8px';
    }else {
        document.getElementById('postDropDown').style.height = '0px';
    }
  }
  render() {
    return (
        <div className="heading" style = {style.heading}>
            <div className="metadata" style = {style.flex}>
                <div className="profil_picture" style={style.metadata_picture}></div>
                <div className="info">
                    <div className="user_name" style={{fontWeight:'bold'}}>unsername</div>
                    <div className="when">timestamp</div>
                </div>
            </div>
            <button style = {style.button} onClick={this.toggleDropDown}><i className="fa fa-ellipsis-v" style={{fontSize : 26}}></i></button>
            <div id="postDropDown">
                <div><i className="fa fa-ban" style={{marginRight : 10}}></i>Hide</div>
                <div><i className="fa fa-exclamation" style={{marginRight : 10}}></i>Report</div>
                <div><i className="fa fa-check" style={{marginRight : 10}}></i>Save</div>                
            </div>
        </div>
    )
  }
}

export default PostHeading;
