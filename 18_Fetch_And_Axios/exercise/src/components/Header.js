import React, { Component } from "react";
import '../styles/components/Header.scss'

export class Header extends Component {
    render() {
        const {weight, lifeSpan} = this.props
        return (
            <header className="header">
                <p>30 Days of React</p>
                <p>Cat Paradise</p>
                <p>There are 67 car breeds</p>
                <p>On avarage a cat can weight about <span className="highlight-number">{weight}</span> Kg and live <span className="highlight-number">{lifeSpan}</span> years.</p>
            </header>
        )
    }
}