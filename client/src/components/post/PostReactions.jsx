import React, { Component } from 'react'

const style ={
    reacts_container : {
        display : 'flex',
        marginBottom : 10
    },
    react_button : {
        borderStyle : 'none',
        width: '100%'
    },
    inputField :{
      margin : 0
    },
    commentInput : {
      margin : 0,
      padding: 5,
      height : 25
    }
}

class PostReactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment : false
    }
  }
  toggleComment = () =>{
    this.setState({
      comment : !this.state.comment
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style = {style.reacts_container}>
          <button className="btn-flat waves-effect waves-light" style={style.react_button}><i className="material-icons">thumb_up</i></button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button}><i className="material-icons">thumb_down</i></button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button}><i className="material-icons" onClick={this.toggleComment}>comment</i></button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button}><i className="material-icons">share</i></button>
        </div>
        {
          this.state.comment ? 
            <div class="input-field" style={style.inputField}>
              <input type="text" id="comment" placeholder="comment" style={style.commentInput}/>
            </div>
          : 
            <div></div>
        }
        
      </React.Fragment>
    )
  }
}

export default PostReactions
