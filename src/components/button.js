import React from 'react'

function Button ({onClick, text}) {
    return (
        <button onClick={onClick} style={{ heigth: "20px" }}>{text}</button>
    )
}

export default Button