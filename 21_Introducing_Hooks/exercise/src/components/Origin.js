import { Component } from "react";
import '../styles/components/Origin.scss'

export class Origin extends Component {
    render() {
        const {origin, value, onClick}=this.props
        return (
            <button className="origin" onClick={onClick} name={origin}>
                {`${origin}(${value})`}
            </button>
        )
    }
}