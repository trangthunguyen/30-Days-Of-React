import React from "react";
import '../styles/shares/Button.scss'

const Button = (props) => {
    const {name, onClick} = props
    return (
        <button name={name} onClick={onClick}>{name}</button>
    )
}

export default Button