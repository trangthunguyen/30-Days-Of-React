import React from "react"
import '../styles/components/Header.scss'

const Header = (props) => {
    const {totalCountries} = props
    return (
        <header>
            <h1 className="title">World Countries Data</h1>
            <h3 className="description">Currently, we have {totalCountries} countries</h3>
        </header>
    )
}

export default Header