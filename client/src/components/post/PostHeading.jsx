import React, { Component } from 'react';


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
    icon : {
        marginRight : 5,
        fontSize : 'small'
    }
}

class PostHeading extends Component {
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
            <a href = {href} className="dropdown-button" data-activates="dropdown"><h4>&#x22EE;</h4></a>
            <ul id='dropdown' className='dropdown-content'>
                <li><a href = {href} style={style.flex}><i className="material-icons" style={style.icon}>block</i>Block User</a></li>
                <li><a href = {href} style={style.flex}><i className="material-icons" style={style.icon}>priority_high</i>Report Post</a></li>
                <li><a href = {href} style={style.flex}><i className="material-icons" style={style.icon}>remove</i>Hide Post</a></li>
            </ul>
        </div>
    )
  }
}

export default PostHeading;
