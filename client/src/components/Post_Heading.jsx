import React, { Component } from 'react';

const style = {
    metadata : {
        padding : 10,
        display : 'flex'
    },
    metadata_picture : {
        height : 50,
        width : 50,
        borderRadius : '50%',
        backgroundColor : 'grey',
        marginRight : 20
    },
    heading : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between'
    }
}

class Post_Heading extends Component {
  render() {
    return (
        <div className="heading" style = {style.heading}>
            <div className="metadata" style = {style.metadata}>
                <div className="profil_picture" style={style.metadata_picture}></div>
                <div className="info">
                    <div className="user_name" style={{fontWeight:'bold'}}>unsername</div>
                    <div className="when">timestamp</div>
                </div>
            </div>
            <h4>&#x22EE;</h4>
        </div>
    )
  }
}

export default Post_Heading;
