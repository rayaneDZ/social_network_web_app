import React, { Component } from 'react'

const style = {
    likesandcommentcontainer : {
        display : 'flex',
        marginBottom : 15,
        marginLeft : 50
    },
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

class LikesAndComments extends Component {
  render() {
    return (
      <div style={style.likesandcommentcontainer}>
        <p style={style.margin}>0 Likes </p>
        <button style={style.button} onClick={this.props.handler}>0 Comments</button>
      </div>
    )
  }
}

export default LikesAndComments
