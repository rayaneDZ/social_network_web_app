import React, { Component } from 'react';

const style = {
    container : {
        marginTop : 50,
        marginRight : 'auto',
        marginLeft : 'auto',
        padding : 30
    }
}

class Content extends Component {
  render() {
    return (
      <div className="container card " style = {style.container}>
        hello
      </div>
    )
  }
}

export default Content
