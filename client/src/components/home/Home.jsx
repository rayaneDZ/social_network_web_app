import React, { Component } from 'react';
import NavBar from '../NavBar.jsx';
import Content from '../home/Content.jsx';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar/>
          <Content/>
      </React.Fragment>
    )
  }
}

export default Home
