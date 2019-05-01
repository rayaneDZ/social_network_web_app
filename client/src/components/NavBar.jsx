import React, { Component } from 'react';

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
    margin : 0,
    padding: 50,
    paddingTop:0,
    paddingBottom : 0,
  }
}

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div class="nav-wrapper" style={style.navBar}>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Messages</a></li>
              </ul>
              <div class="input-field">
                <input type="text" id="name"/>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              </div>
            </div>
        </nav>
    )
  }
}

export default NavBar
