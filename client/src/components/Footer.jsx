import React from 'react'

const style = {
    outerdiv : {
        height : 200,
        width : '100%',
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor: 'white',
        flexDirection : 'column'
    }
}

const Footer = () => {
    return (
        <div style={style.outerdiv}>
            <p>Website created by</p>
            <p>Rayane Bouthiba</p>
        </div>
    )
}

export default Footer
