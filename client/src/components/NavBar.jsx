import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import './css/navbar.css';

const style = {
  flex : {
    display : 'flex',
    alignItems : 'center'
  },
  anchors : {
    padding : 20,
    color : 'white'
  }
}

class NavBar extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("profile_picture_path");
    window.location.replace('http://localhost:3000/');
  }
  toggleMenu = () => {
    const menu = document.getElementById('hamburgerMenu');
    if (menu.style.display === 'none') {
      menu.style.display = 'block'
    }else {
      menu.style.display = 'none'
    }
  }
  render() {
    return (
      <React.Fragment>
        <div id="navbarContainer">
          <i className="fa fa-bars" onClick={this.toggleMenu}></i>  
          <div id="leftSideNav" style={style.flex}>
              <a href="/home" id="whatever"><i style={style.anchors} className="material-icons white-text">home</i></a>
              <a href="/profile"><i style={style.anchors} className="material-icons white-text">person</i></a>
              <a href="/messages"><i style={style.anchors} className="material-icons white-text">message</i></a>
          </div>
          <SearchBar/>
          <div id="rightSideNav">
            <a style={style.anchors} href="/" onClick={this.logOut}>Log Out</a>
          </div>
        </div>
        <div id="hamburgerMenu">
          <div className="hambElem">
            <a href="/home"><h4>Home</h4></a>
          </div>
          <div className="hambElem">
            <a href="/profile"><h4>Profile</h4></a>
          </div>
          <div className="hambElem">
            <a href="/messages"><h4>Messages</h4></a>
          </div>
          <div className="hambElem">
            <a href="/"><h4>Log Out</h4></a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NavBar
