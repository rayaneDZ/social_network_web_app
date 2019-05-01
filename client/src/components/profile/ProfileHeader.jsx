import React, { Component } from 'react';

const href = '#';

const style = {
    profilePic : {
        height: 200,
        width : 200,
        textAlign : 'center',
        backgroundColor : 'grey',
        marginRight : 20
    },
    flex : {
        display : 'flex'
    },
    infoContainer : {
        width : '100%',
        display : 'flex',
        justifyContent : 'space-between'
    },
    icon : {
        marginRight : 5,
        fontSize : 'small'
    }
}

class ProfileHeader extends Component {
  render() {
    return (
      <div style ={style.flex}>
          <div id="profilePic" style= {style.profilePic} ></div>
          <div id="infoContainer" style ={style.infoContainer}>
            <div>
                <h3 style={{marginTop : 0}}>Username</h3>
                <h6>email</h6>
            </div>
            <a href = {href} className="dropdown-button" data-activates="dropdown1"><h4 style={{marginTop : 0}}>&#x22EE;</h4></a>
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href = {href} style={style.flex}><i className="material-icons" style={style.icon}>block</i>Block User</a></li>
                <li><a href = {href} style={style.flex}><i className="material-icons" style={style.icon}>priority_high</i>Report Post</a></li>
                <li><a href = {href} style={style.flex}><i className="material-icons" style={style.icon}>remove</i>Hide Post</a></li>
            </ul>
          </div>
      </div>
    )
  }
}

export default ProfileHeader
