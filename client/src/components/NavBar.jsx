import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

const style = {
  navBar : {
    display:'flex',
    alignItems:'center',
    justifyContent : 'space-between',
    backgroundColor : '#673ab7'
  },
  flex : {
    display : 'flex',
    alignItems : 'center'
  }
}

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper" style={style.navBar}>
              <ul id="nav-mobile" className="right hide-on-med-and-down" style = {style.flex}>
                  <li><a href="/home"><i className="material-icons">home</i></a></li>
                  <li><a href="/profile"><i className="material-icons">person</i></a></li>
                  <li><a href="/messages"><i className="material-icons">message</i></a></li>
                  <li><SearchBar /></li>
              </ul>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Log Out</a></li>
              </ul>
            </div>
        </nav>
      
    )
  }
}

export default NavBar
