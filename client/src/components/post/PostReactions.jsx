import React, { Component } from 'react';

const style ={
    reacts_container : {
        display : 'flex',
        marginBottom : 0
    },
    react_button : {
        borderStyle : 'none',
        width: '100%'
    },
    inputField :{
      marginBottom : 14.5
    },
    commentInput : {
      margin : 0,
      marginTop : 10,
      padding: 5,
      height : 25,
      borderStyle : 'none',
      border : '1px solid black',
      borderRadius : '5px',
      width : 'calc(100% - 20px)'
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
          <button className="btn-flat waves-effect waves-light" style={style.react_button} onClick={this.toggleComment}><i className="material-icons">comment</i></button>
          <button className="btn-flat waves-effect waves-light" style={style.react_button}><i className="material-icons">share</i></button>
        </div>
        {
          this.state.comment ? 
            
              <input type="text" id="comment" placeholder="comment" style={style.commentInput}/>
            
          : 
            <div></div>
        }
        
      </React.Fragment>
    )
  }
}

export default PostReactions
