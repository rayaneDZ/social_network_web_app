import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import Content from '../home/Content.jsx';

const style = {
  homeContainer : {
    height : '100%',
    backgroundColor : '#e9ebee'
  }
}

class Home extends Component {
  render() {
    return (
      <div style = {style.homeContainer}>
          <NavBar/>
          <Content/>
      </div>
    )
  }
}

export default Home
