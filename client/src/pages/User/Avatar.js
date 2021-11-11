import React from 'react'

const Avatar = ({ value, backgroundColor, px, py, color, fontSize }) => {
    const styles = {
        backgroundColor, 
        padding:`${py} ${px} `, 
        color: color || 'black',
        borderRadius: "5px",
        fontSize ,
        textAlign: "center"
    }
    return (
        <div style={styles}>
            { value }
        </div>
    )
}

export default Avatar
