import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import Content from '../home/Content.jsx';

const style = {
  homeContainer : {
    height : '100%',
    backgroundColor : '#673ab7'
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
