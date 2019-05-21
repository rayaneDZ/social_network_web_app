import React, { Component } from 'react';

const style = {
    margin : {
        margin : 0,
        marginRight : 15
    },
    button : {
        border : 'none',
        backgroundColor : 'white',
        padding : 0
    }
}

class ShowComments extends Component {
  render() {
    return (
        <button style={style.button} onClick={this.props.handler}><p style={{fontSize : 10}}>show comments</p></button>
    )
  }
}

export default ShowComments
