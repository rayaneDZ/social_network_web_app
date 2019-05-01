import React, { Component } from 'react'

const style ={
    reacts_container : {
        display : 'flex',
    },
    react_button : {
        borderStyle : 'none',
        width: '100%'
    }
}

class Post_Reactions extends Component {
  render() {
    return (
      <div style = {style.reacts_container}>
        <button class="btn-flat waves-effect waves-light" style={style.react_button}><i class="material-icons">thumb_up</i></button>
        <button class="btn-flat waves-effect waves-light" style={style.react_button}><i class="material-icons">thumb_down</i></button>
        <button class="btn-flat waves-effect waves-light" style={style.react_button}><i class="material-icons">comment</i></button>
        <button class="btn-flat waves-effect waves-light" style={style.react_button}><i class="material-icons">share</i></button>
      </div>
    )
  }
}

export default Post_Reactions
