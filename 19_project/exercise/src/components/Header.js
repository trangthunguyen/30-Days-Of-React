import React, { Component } from "react";
import '../styles/components/Header.scss'

export class Header extends Component {
    render() {
        const {weight, lifeSpan} = this.props
        return (
            <header className="header">
                <p className="title">30 Days of React</p>
                <p className="intro">Cat Paradise</p>
                <p className="total-breeds">There are 67 cat breeds</p>
                <p className="description">On avarage a cat can weight about <span className="highlight-number">{weight}</span> Kg and live <span className="highlight-number">{lifeSpan}</span> years.</p>
            </header>
        )
    }
}