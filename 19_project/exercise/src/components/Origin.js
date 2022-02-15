import { Component } from "react";
import '../styles/components/Origin.scss'

export class Origin extends Component {
    render() {
        const {origin, value}=this.props
        return (
            <div className="origin">
                {`${origin}(${value})`}
            </div>
        )
    }
}