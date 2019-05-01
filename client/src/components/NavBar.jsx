import React, { Component } from 'react';
import './navbar.css';

const style = {
  navBar : {
    display:'flex',
    alignItems:'center',
    justifyContent : 'space-between'
  },
  search : {
    width : 300,
    height : '80%',
    display : 'flex',
    alignItems : 'center'
  },
  input : {
    backgroundColor : 'white',
    color : 'black',
    padding: 10,
  }
}

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper" style={style.navBar}>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/home">Home</a></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/messages">Messages</a></li>
              </ul>
              <form id="navbarForm">
                  <div className="input-field">
                      <input id="search" type="search" name="search"/>
                      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                  </div>
              </form>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Log Out</a></li>
              </ul>
            </div>
        </nav>
      
    )
  }
}

export default NavBar
