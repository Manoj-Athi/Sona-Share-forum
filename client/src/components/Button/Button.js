import React from 'react'

const Button = ({ children, type, px, py, color, backgroundColor, border, onClick}) => {
    // const hoverBg = color
    // const hoverColor = backgroundColor
    const style = {
        padding: `${py} ${px}`,
        color,
        backgroundColor,
        transition: '0.3s',
        border: `solid 1px ${border || 'transparent'}`,
        cursor: 'pointer',
        borderRadius: '4px',
        fontWeight: '500'
    }

    // const hoverEffectEnter = (e) => {
    //     e.target.style.backgroundColor = hoverBg
    //     e.target.style.color = hoverColor
    // }

    // const hoverEffectLeave = (e) => {
    //     e.target.style.backgroundColor = backgroundColor
    //     e.target.style.color = color
    // }


    return (
        <button type={type} style={style} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button
